import NotificationTable from "../design-system/NotificationTable"
import SideBar from "../design-system/SideBar"


const NotificationCenter = () => {
  return (
    <div>
        <SideBar />

        <div className="p-4 sm:ml-64">
            <NotificationTable />
        </div>
    </div>
  )
}

export default NotificationCenter