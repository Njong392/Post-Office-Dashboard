import Login from './modules/auth/components/Login'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Signup from './modules/auth/components/Signup'
import Dashboard from './modules/core/components/Dashboard'
import User from './modules/core/components/User'
import NotificationCenter from './modules/core/components/NotificationCenter'
import { useUserContext } from './modules/auth/hooks/useUserContext'

function App() {
  const {
    state: { user}
  } = useUserContext()
  
  

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
            path='/user'
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
