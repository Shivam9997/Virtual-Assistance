import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"


const App = () => {
  return (
   <Routes>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>

   </Routes>
  )
}

export default App
