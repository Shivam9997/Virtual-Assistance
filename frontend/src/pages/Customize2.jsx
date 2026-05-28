

const Customize2 = () => {
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
        required 
        />
         <button
          className="min-w-[250px] h-[60px] mt-[30px] text-black font-semibold text-[19px] rounded-full cursor-pointer  border
          border-white
          bg-lime-100
          text-black
          focus:border-b-rose-900
          focus:ring-2
          focus:ring-sky-400/40"
         
        >
         Create Your Assistant
        </button>
    </div>
  )
}

export default Customize2
