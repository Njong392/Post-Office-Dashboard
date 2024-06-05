import UserCard from "../design-system/UserCard"
import UserNotificationTable from "../design-system/UserNotificationTable"
import SideBar from "../design-system/SideBar"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../auth/config/firebase"

const User = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [packages, setPackages] = useState([])

  useEffect(() => {
    const fetchUserAndPackages = async () => {
      const userDoc = await getDoc(doc(db, 'users', id))
      if(userDoc.exists()){
        setUser(userDoc.data())

        const packageQuery = query(collection(db, 'packages'), where('recipientid', '==', id))
        const packagesSnapshot = await getDocs(packageQuery)
        setPackages(packagesSnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      } else {
        console.log('No such user!')
      }
    }

    fetchUserAndPackages()
  }, [id])

  return (
    <>
        <SideBar />

        <div className="p-4 sm:ml-64">
            <div className="grid grid-cols-2 mt-14 gap-4">
                <UserCard user = {user}/>
                <UserNotificationTable packages={packages} />
            </div>
       </div>
    </>
  )
}

export default User