import { useEffect, useState } from "react"
import SearchBar from "../design-system/SearchBar"
import SideBar from "../design-system/SideBar"
import UserTable from "../design-system/UserTable"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../auth/config/firebase"


const Dashboard = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
   const fetchUsers = async () => {
     const usersCollection = collection(db, "users");
     const usersSnapshot = await getDocs(usersCollection);
     const usersList = usersSnapshot.docs.map((doc) => ({
       ...doc.data(),
       id: doc.id,
     }));
     setUsers(usersList);
   }

   fetchUsers()
  }, [])


  return (
    <div>
        <SideBar />
        
      <div className="p-4 sm:ml-64">
        <SearchBar />
         <UserTable users={users}/>
      </div>
    </div>
  )
}

export default Dashboard