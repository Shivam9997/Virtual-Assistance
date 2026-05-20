import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Customize from "./pages/Customize"


const App = () => {
  return (
   <Routes>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/Customize' element={<Customize/>}/>

   </Routes>
  )
}

export default App
