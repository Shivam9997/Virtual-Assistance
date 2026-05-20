import { useState } from "react";
import bg from "../assets/Robot2.jpg";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios"


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {serverUrl}=  useContext(UserDataContext)
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword ] = useState("")
  const [err, setErr]= useState("")


  const handleSignIn=async (e)=>{
        e.preventDefault()
        setErr("")
        setLoading(true)

     try {
      const result= await axios.post(`${serverUrl}/api/auth/signin`,{
        email,password
      },{withCredentials:true})
      console.log(result)
        setLoading(false)
      
     } catch (error) {
      console.log(error.response.data)
      setLoading(false)
      setErr(error.response.data.message)
      
     }
  }

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        className="
        w-[90%]
        h-[600px]
        max-w-[500px]
        bg-[rgba(0,0,20,0.45)]
        border
        border-white/20
        backdrop-blur
        rounded-2xl
        shadow-2xl
        shadow-blue-500/20
        flex
        flex-col
        items-center
        justify-center
        gap-5
        p-8
      "
      onSubmit={handleSignIn}
      >
        <h1 className="text-white text-3xl font-semibold mb-8">
          Login to{" "}
          <span className="text-sky-400">Virtual Assistant</span>
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="
          w-full
          h-14
          px-4
          rounded-full
          text-[18px]
          outline-none
          border
          border-white
          bg-white/10
          text-white
          placeholder-gray-300
          focus:border-sky-400
          focus:ring-2
          focus:ring-sky-400/40
        "
        required onChange={(e)=>setEmail(e.target.value)} value={email}
        />
        <div className=" w-full
          h-14
          rounded-full
          text-[18px]
          relative
          ">
        <input
          type={showPassword?'text':'password'}
          placeholder="Password"
          className="
          w-full
          h-14
          px-4
          rounded-full
          text-[18px]
          outline-none
          border
          border-white
          bg-white/10
          text-white
          placeholder-gray-300
          focus:border-sky-400
          focus:ring-2
          focus:ring-sky-400/40
        "  
         required onChange={(e)=>setPassword(e.target.value)} value={password}
        />
        {!showPassword && <IoIosEye className="absolute top-[17px] right-[20px] w-[25px] h-[25px] text-white  cursor-pointer " onClick={()=>setShowPassword(true)} />} 
        {showPassword && <IoIosEyeOff  className="absolute top-[17px] right-[20px] w-[25px] h-[25px] text-white  cursor-pointer " onClick={()=>setShowPassword(false)} />} 
        
        </div>
        {err.length>0 && <p className="text-red-600 ">
          *{err}
          </p>}
        <button className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold text-[19px] bg-white rounded-full "disabled={loading} >{loading?"Loading...":"Sign In" }</button>
        <p className="text-white text-[18px] cursor-pointer ">To Create a new account? <span className="text-sky-400" onClick={()=>navigate('/SignUp')}>Sign Up</span> </p>
      </form>
    </div>
  );
};

export default SignIn;