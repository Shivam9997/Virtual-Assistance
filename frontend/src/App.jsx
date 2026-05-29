import { Navigate, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Customize from "./pages/Customize"
import { useContext } from "react"
import { UserDataContext } from "./context/UserContext"
import Home from "./pages/Home"
import Customize2 from "./pages/Customize2"


const App = () => {
  const {userData,setUserData}= useContext(UserDataContext)
  return (
   <Routes>

    <Route path='/' element={(userData?.assistantImage && userData.assistantName)? <Home/>: <Navigate to={"/customize"}/>}/>
    <Route path='/signUp' element={!userData?<SignUp/>: <Navigate to={"/customize"}/>}/>
    <Route path='/signIn' element={!userData?<SignIn/>: <Navigate to={"/customize"}/>}/>
    <Route path='/customize' element={userData?<Customize/>:<Navigate to={"/signIn"}/>}/>
    <Route path='/customize2' element={userData?<Customize2/>:<Navigate to={"/signIn"}/>}/>

   </Routes>
  )
}

export default App
