import { Link } from "react-router-dom";
import { auth, db } from "../../auth/config/firebase";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  Timestamp,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { formatDate } from "../utils/dateUtil";
import FilterBar from "./FilterBar";

const NotificationTable = () => {
  const [packageList, setPackageList] = useState([]);
  const [timeFrame, setTimeFrame] = useState("month");
  const [statusCounts, setStatusCounts] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('')

  const packageCollectionRef = collection(db, "packages");

  //function to calculate timeframes
  const getStartDate = (timeFrame) => {
    const now = new Date();
    const startDate = new Date();

    switch (timeFrame) {
      case "week":
        startDate.setDate(now.getDate() - 7);
        break;
      case "month":
        startDate.setMonth(now.getMonth() - 1);
        break;
      case "year":
        startDate.setFullYear(now.getFullYear() - 1);
        break;
      default:
        break;
    }

    return startDate;
  };

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      if (currentUser) {
        const userId = currentUser.uid;

        const startDate = getStartDate(timeFrame);
        const q = query(
          packageCollectionRef,
          where("creatorId", "==", userId),
          orderBy("collectedOrResentDate", "asc")
        );

        //get all packages from collection irt
        const unsubscribeQuery = onSnapshot(q, (snapshot) => {
          try {
            const packages = snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            const statusCounts = packages.reduce((counts, pkg) => {
              if (pkg.collectedOrResentDate >= startDate) {
                counts[pkg.status] = (counts[pkg.status] || 0) + 1;
              }
              return counts;
            }, {});

            setPackageList(packages);
            setStatusCounts(statusCounts);
            //console.log(statusCounts)
          } catch (err) {
            console.error(err);
          }
        });

        //cleanup function for the query
        return () => unsubscribeQuery();
      }
    });

    //cleanup function for the auth sub
    return () => unsubscribeAuth();
  }, [packageCollectionRef, timeFrame, currentUser]);

  // to update status in db and on
  const handleStatusChange = async (e, packageId) => {
    const status = e.target.value;
    if (status === "collected" || status === "resent") {
      const packageRef = doc(db, "packages", packageId);
      updateDoc(packageRef, {
        collectedOrResentDate: Timestamp.fromDate(new Date()),
        status: status,
      });
    }
  };

  return (
    <>
      <FilterBar setTimeFrame={setTimeFrame} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6 border-2">
        {statusCounts && <p>{statusCounts.resent}</p>}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Recipient Name
              </th>
              <th scope="col" className="px-6 py-3">
                Country of Origin
              </th>
              <th scope="col" className="px-6 py-3">
                Sender Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Arrival date
              </th>
              <th scope="col" className="px-6 py-3">
                Due date for collection
              </th>
              <th scope="col" className="px-6 py-3">
                Due date for resending
              </th>
              <th scope="col" className="px-6 py-3">
                Date collected/resent
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {packageList.map((packages) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={packages.id}
              >
                <td
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link
                    to="/user"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {packages.recipientName}
                  </Link>
                </td>
                <td className="px-6 py-4">{packages.countryOfOrigin}</td>
                <td className="px-6 py-4">{packages.senderContact}</td>
                <td className="px-6 py-4">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-20 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={packages.status || "Not collected"}
                    onChange={(e) => handleStatusChange(e, packages.id)}
                  >
                    <option defaultValue="">Not collected</option>
                    <option value="collected">Collected</option>
                    <option value="resent">Resent</option>
                  </select>
                </td>

                <td className="px-6 py-4">
                  {formatDate(packages.arrivalDate.toDate())}
                </td>

                <td className="px-6 py-4">
                  {formatDate(packages.DueCollectionDate.toDate())}
                </td>

                <td className="px-6 py-4">
                  {formatDate(packages.DueResendDate.toDate())}
                </td>

                <td className="px-6 py-4">
                  {packages.collectedOrResentDate
                    ? formatDate(packages.collectedOrResentDate.toDate())
                    : "-"}
                </td>

                <td className="px-6 py-4">{packages.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NotificationTable;
