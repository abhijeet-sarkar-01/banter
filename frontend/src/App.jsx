import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import './index.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/authContext.jsx'

function App() {

  const {authUser} = useAuthContext();
  return (
    <>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />}/>
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
