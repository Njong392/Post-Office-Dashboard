const UserNotificationTable = () => {
  return (
    <div className="notifcard">

                <div className="rounded-lg p-4">
                    <h1 className="text-xl text-blue-700 font-semibold">All packages for this user</h1>

                    <div className="relative overflow-y-auto max-h-[440px] mt-4 shadow-md sm:rounded-lg">
                        
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-xs uppercase bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    
                                    <th scope="col" className="px-6 py-3">
                                        Package
                                    </th>
                                    
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Due date
                                    </th>

                                     <th scope="col" className="px-6 py-3">
                                        Date collected/resent
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody className="overflow-y-scroll h-60 w-full">
                               

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">                      
                                    <td className="px-6 py-4">
                                        GitKraken swag
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> collected
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        21/04/2024
                                    </td>

                                    <td className="px-6 py-4">
                                        25/04/2024
                                    </td>
                                </tr>

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">                      
                                    <td className="px-6 py-4">
                                        GitKraken swag
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> collected
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        21/04/2024
                                    </td>

                                    <td className="px-6 py-4">
                                        25/04/2024
                                    </td>
                                </tr>

                               
                                
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
  )
}

export default UserNotificationTable