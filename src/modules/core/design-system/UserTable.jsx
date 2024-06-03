import { Link } from "react-router-dom"

const UserTable = () => {
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
                    Phone number
                </th>
                <th scope="col" className="px-6 py-3">
                    Region
                </th>
                <th scope="col" className="px-6 py-3">
                    Current location
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    
                        <div className="text-base font-semibold">Neil Sims</div>
                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    
                </td>
                <td className="px-6 py-4">
                    +237 676 815 827
                </td>
                <td className="px-6 py-4">
                    North-west
                </td>

                <td className="px-6 py-4">
                    Nkwen, Bamenda
                </td>
                <td className="px-6 py-4">
                    <Link to="/user" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View user</Link>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    </>
  )
}

export default UserTable