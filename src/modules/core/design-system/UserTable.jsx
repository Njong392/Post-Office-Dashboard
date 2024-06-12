/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const UserTable = ({users}) => {
  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6 border-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone number
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Town
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={user.id}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="text-base font-semibold">{user.name}</div>
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phoneNumber}</td>

                  <td className="px-6 py-4">{user.region}</td>
                  <td className="px-6 py-4">{user.town}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/user/${user.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View user
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserTable