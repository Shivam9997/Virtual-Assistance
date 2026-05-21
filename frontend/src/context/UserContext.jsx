/* eslint-disable react-refresh/only-export-components */
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

export const UserDataContext = createContext()

const UserContext = ({children}) => {
    const serverUrl= "http://localhost:8000"
    const [userData,setUserData]= useState(null)


    useEffect(()=>{
      const handleCurrentUser = async () => {
        try {
          const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true })
          setUserData(result.data)
          console.log(result.data)
        } catch (error) {
          console.log(error)
        }
      }

      handleCurrentUser()
    },[])

    const value={
        serverUrl,userData,setUserData
           

    }
  return (
    
        <UserDataContext.Provider value={value}>
        {children}
        </UserDataContext.Provider>
      
    
  )
}

export default UserContext
