import UserCard from "../design-system/UserCard"
import UserNotificationTable from "../design-system/UserNotificationTable"
import SideBar from "../design-system/SideBar"

const User = () => {
  return (
    <>
        <SideBar />

        <div className="p-4 sm:ml-64">
            <div className="grid grid-cols-2 mt-14 gap-4">
                <UserCard />
                <UserNotificationTable />
            </div>
       </div>
    </>
  )
}

export default User