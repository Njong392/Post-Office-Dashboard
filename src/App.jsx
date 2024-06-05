import Login from './modules/auth/components/Login'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Signup from './modules/auth/components/Signup'
import Dashboard from './modules/core/components/Dashboard'
import User from './modules/core/components/User'
import NotificationCenter from './modules/core/components/NotificationCenter'
import { useUserContext } from './modules/auth/hooks/useUserContext'
import { getToken } from 'firebase/messaging'
import { useEffect } from 'react'
import { messaging } from './modules/auth/config/firebase'

function App() {
  const {
    state: { user}
  } = useUserContext()
  const {NOTIFS_APP_VAPID_KEY} = import.meta.env

  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: NOTIFS_APP_VAPID_KEY,
      });

      //We can send token to server
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied permissions for the notification");
    }
  }
  
  useEffect(() => {
    requestPermission();
  }, []);
  

  console.log('user', user)
  
  return (
    <div className='font-poppins'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to ='/'/>}
            
          />

          <Route
            path = '/login'
            element={!user ? <Login /> : <Navigate to ='/'/>}
          />

          <Route 
            path='/'
            element={user ? <Dashboard /> : <Navigate to='/login' /> }
          />

          <Route 
            path='/user/:id'
            element={<User />}
          />

           <Route 
            path='/notifcenter'
            element={<NotificationCenter />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
