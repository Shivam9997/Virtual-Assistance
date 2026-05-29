import { useContext, useState } from "react"
import { UserDataContext } from "../context/UserContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const Customize2 = () => {
    const {userData,backendImage,selectedImage,serverUrl,setUserData}= useContext(UserDataContext)
    const [assistantName, setAssitantName]= useState(userData?.AssistantName || "")

     const Navigate = useNavigate();

    const handleUpdateAssistant=async()=>{
        try {
            let formData=new FormData()
            formData.append("assistantName",assistantName)
            if(backendImage){
                formData.append("assistantImage", backendImage)
            }
            else{
                formData.append("imageUrl", selectedImage)
            }
            const result = await axios.post(`${serverUrl}/api/user/update`,
                formData,{withCredentials:true}
            )
            console.log(result.data)
            setUserData(result.data)
            
        } catch (error) {
            
            console.log(error.response.data)
        }

    }
  return (
    <div  className="w-full h-screen bg-linear-to-t from-[#160202] to-[#020258f3] 
     flex justify-center items-center flex-col p-6 ">
      
       <h1 className="text-white text-3xl mb-[30px] text-center ">
        Enter your{" "}
        <span className="text-blue-700 "> Assistant Name </span>{" "}
      </h1>
       <input
          type="text"
          placeholder="Ex. Shifra"
          className="
          w-full
          max-w-[550px]
          h-14
          px-4
          rounded-full
          text-[18px]
          outline-none
          border
          border-white
          bg-transparent
          text-white
          focus:border-b-rose-900
          focus:ring-2
          focus:ring-sky-400/40
        "
        onChange={(e)=>setAssitantName(e.target.value)}
        value={assistantName}
        required 
        />
        {assistantName &&  <button
          className="min-w-[250px] h-[60px] mt-[30px] text-black font-semibold text-[19px] rounded-full cursor-pointer  border
          border-white
          bg-lime-100
          text-black
          focus:border-b-rose-900
          focus:ring-2
          focus:ring-sky-400/40"
          onClick={()=>{
            Navigate("/customize2")
            handleUpdateAssistant()
        }}
         
        >
         Create Your Assistant
        </button> 
}
        
    </div>
  )
}

export default Customize2
