import { Navigate, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Customize from "./pages/Customize"
import { useContext } from "react"
import { UserDataContext } from "./context/UserContext"
import Home from "./pages/Home"


const App = () => {
  const {userData,setUserData}= useContext(UserDataContext)
  return (
   <Routes>

    <Route path='/' element={(userData?.assistantImage && userData.assistantName)? <Home/>: <Navigate to={"/Customize"}/>}/>
    <Route path='/signUp' element={!userData?<SignUp/>: <Navigate to={"/"}/>}/>
    <Route path='/signIn' element={!userData?<SignIn/>: <Navigate to={"/"}/>}/>
    <Route path='/customize' element={userData?<Customize/>:<Navigate to={"/SignIn"}/>}/>

   </Routes>
  )
}

export default App
