import SearchBar from "../design-system/SearchBar"
import SideBar from "../design-system/SideBar"
import UserTable from "../design-system/UserTable"


const Dashboard = () => {
  return (
    <div>
        <SideBar />
        
      <div className="p-4 sm:ml-64">
        <SearchBar />
         <UserTable />
      </div>
    </div>
  )
}

export default Dashboard