import Card from "../components/Card";
import image1 from "../assets/Robot10.jpg";
import image2 from "../assets/Robot12.jpg";
import image3 from "../assets/Robot3.jpg";
import image4 from "../assets/Robot4.jpg";
import image5 from "../assets/Robot5.jpg";
import image6 from "../assets/Robot6.jpg";
import image7 from "../assets/Robor7.jpg";
import { BiSolidCloudUpload } from "react-icons/bi";
import { useContext, useRef, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Customize = () => {
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
  const inputImage = useRef();
  const Navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
  };
  return (
    <div
      className="w-full h-screen bg-linear-to-t from-[#1e0101] to-[#030347f3] 
     flex justify-center items-center flex-col p-6 "
    >
      <h1 className="text-white text-4xl mb-[30px] text-center ">
        Select your{" "}
        <span className="text-blue-700 "> Assistant Images </span>{" "}
      </h1>
      <div className="w-full max-w-[900px] flex justify-center items-center flex-wrap gap-4">
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />
        <div
          className={`w-[70px] h-[130px] lg:w-[150px] lg:h-[250px] bg-[#000015] border-2 border-[#0505206b] rounded-2xl overflow-hidden
    hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-9 hover:border-be-indigo-950 flex items-center 
    justify-center ${selectedImage == "input" ? "border-4 border-b-blue-500 shadow-2xl shadow-blue-950" : null} `}
          onClick={() => {
            inputImage.current.click();
            setSelectedImage("input");
          }}
        >
          {!frontendImage && (
            <BiSolidCloudUpload className="text-white w-[45px] h-[45px] " />
          )}
          {frontendImage && (
            <img src={frontendImage} className="h-full object-cover " />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={inputImage}
          hidden
          onChange={handleImage}
        />
      </div>
      {selectedImage && (
        <button
          className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold text-[19px] bg-white rounded-full cursor-pointer"
          onClick={() => Navigate("/customize2")}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Customize;
