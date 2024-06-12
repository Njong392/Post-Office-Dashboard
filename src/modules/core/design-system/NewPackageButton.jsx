import { useState, useEffect } from "react";
import { auth, db } from "../../auth/config/firebase";
import { Timestamp, addDoc, collection, getDocs, query, where } from "firebase/firestore";

const NewPackageButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [countryOfOrigin, setCountryOfOrigin] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [collectionDate, setCollectionDate] = useState('');
  const [resendDate, setResendDate] = useState('');
  const [category, setCategory] = useState('');
  //const [recipientid, setRecipientId] = useState(null);
  const [status] = useState('NotCollected')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [collectedOrResentDate] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [serialNumber, setSerialNumber] = useState(null)
 

  const packageCollectionRef = collection(db, 'packages')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
 

  //toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
    setSuccess(false)
    setError(false)
  };

  //add packages to package collection
  const addPackage = async (e) => {
    e.preventDefault()
    try{
      if(auth.currentUser){
        const userId = currentUser.uid

        //query the users collection
        const q = query(collection(db, 'users'), where('name', '==', recipientName))

        const querySnapshot = await getDocs(q)

        let recipientId = null

        if(!querySnapshot.empty){
          recipientId = querySnapshot.docs[0].id
        }

        await addDoc(packageCollectionRef, {
          recipientid: recipientId,
          countryOfOrigin: countryOfOrigin,
          serialNumber: serialNumber,
          senderContact: senderContact,
          recipientName: recipientName,
          arrivalDate: Timestamp.fromDate(new Date(arrivalDate)),
          DueCollectionDate: Timestamp.fromDate(new Date(collectionDate)),
          DueResendDate: Timestamp.fromDate(new Date(resendDate)),
          collectedOrResentDate: collectedOrResentDate,
          category: category,
          status: status,
          creatorId: userId,
          
        });
        setCountryOfOrigin('')
        setSenderContact('')
        setRecipientName('')
        setArrivalDate('')
        setCollectionDate('')
        setResendDate('')
        setCategory('')
        setSerialNumber('')
        
      } else{
        console.log('user not logged in')
      }
      setSuccess(true)
      setError(false)
      console.log('package added')
    } catch(err){
      setSuccess(false)
      setError(true)
      console.error(err)
    }
  }
  

  return (
    <div>
      <button
        onClick={toggleModal}
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        New Package
      </button>

      {showModal && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-2 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add New Package
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="cor"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Package Serial Number
                    </label>
                    <input
                      type="text"
                      name="cor"
                      id="cor"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Package Serial Number"
                      required=""
                      value={serialNumber}
                      onChange={(e) => setSerialNumber(e.target.value)}
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="cor"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country of Origin
                    </label>
                    <input
                      type="text"
                      name="cor"
                      id="cor"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Country of origin"
                      required=""
                      value={countryOfOrigin}
                      onChange={(e) => setCountryOfOrigin(e.target.value)}
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="contact"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Sender contact info
                    </label>
                    <input
                      type="text"
                      name="contact"
                      id="contact"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Sender's contact info"
                      required=""
                      value={senderContact}
                      onChange={(e) => setSenderContact(e.target.value)}
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name of recipient
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type recipient name"
                      required=""
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="arrival"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Arrival date
                    </label>
                    <input
                      type="date"
                      name="arrivalDate"
                      id="arrivalDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Arrival date"
                      required=""
                      value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="collection"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Due date for collection
                    </label>
                    <input
                      type="date"
                      name="CollectionDate"
                      id="CollectionDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Collection date"
                      required=""
                      value={collectionDate}
                      onChange={(e) => setCollectionDate(e.target.value)}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="resending"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Resend to origin
                    </label>
                    <input
                      type="date"
                      name="resendDate"
                      id="resendDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Resend date"
                      required=""
                      value={resendDate}
                      onChange={(e) => setResendDate(e.target.value)}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option defaultValue="">Select category</option>
                      <option value="Express">Express</option>
                      <option value="Normal">Normal</option>
                    </select>
                  </div>
                </div>
                {success && (
                  <p className="text-green-500">Package added successfully</p>
                )}
                {error && (
                  <p className="text-red-500">
                    Oops, some error occurred. Try again
                  </p>
                )}
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={addPackage}
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Add package
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPackageButton;
