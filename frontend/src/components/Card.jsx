import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Card = ({ image }) => {
  const {
    serverUrl,
    userData,
    setUserData,
    frontendImage,
    setFrontendImage,
    backendImage,
    setBackendImage,
    selectedImage,
    setSelectedImage,
  } = useContext(UserDataContext);
  return (
    <div
      className= {`w-[70px] h-[130px] lg:w-[150px] lg:h-[250px] bg-[#07073c] border-2 border-[#0808386b] rounded-2xl overflow-hidden
    hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-b-blue-500 ${selectedImage==image?"border-4 border-b-blue-500 shadow-2xl shadow-blue-950":null} `}
      onClick={() => {
        setSelectedImage(image)
        setBackendImage(null)
        setFrontendImage(null)
      }}
    >
      <img src={image} alt="card" className="h-full object-cover " />
    </div>
  );
};

export default Card;
