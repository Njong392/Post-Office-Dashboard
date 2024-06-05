/* eslint-disable react/prop-types */
const UserNotificationTable = ({packages}) => {
  return (
    <div className="notifcard">
      <div className="rounded-lg p-4">
        <h1 className="text-xl text-blue-700 font-semibold">
          All packages for this user
        </h1>

        <div className="relative overflow-y-auto max-h-[440px] mt-4 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs uppercase bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Country of origin
                </th>

                <th scope="col" className="px-6 py-3">
                  Status
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
              </tr>
            </thead>
            <tbody className="overflow-y-scroll h-60 w-full">
              {packages &&
                packages.map((p) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={p.id}
                  >
                    <td className="px-6 py-4">{p.countryOfOrigin}</td>
                    <td className="px-6 py-4">{p.status}</td>
                    <td className="px-6 py-4">
                      {p.DueCollectionDate.toDate().toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      {p.DueResendDate.toDate().toLocaleDateString()}
                    </td>

                    {p.collectedOrResentDate ? (
                      <td className="px-6 py-4">
                        {p.collectedOrResentDate.toDate().toLocaleDateString()}
                      </td>
                    ) : (
                      <td className="px-6 py-4">-</td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserNotificationTable