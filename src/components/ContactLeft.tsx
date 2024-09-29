import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import {  contactus } from "../assets";

const ContactLeft = () => {

  const handleMouseEnter = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.add('cursor-active');

  }
const handleMouseLeave = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.remove('cursor-active');
  }
    return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactus}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Aakash Ramani</h3>
        <p className="text-lg font-normal text-gray-400">
          Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          <span className="capitalize text-lg text-green-600">LET'S MAKE YOUR BRAND BRILLIANT!</span><br></br>        
          <span className="text-xs">If you would like to work with us or just want to get in touch, we’d love to hear from you!</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 97258 08487</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">aakash.ramani021@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/AksRamani" target="_blank"
          onMouseEnter={()=>{
            handleMouseEnter();
          }}
          onMouseLeave={()=>{
            handleMouseLeave();
          }}>
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/aakash-ramani-541321235/"
            target="_blank"
            onMouseEnter={()=>{
              handleMouseEnter();
            }}
            onMouseLeave={()=>{
              handleMouseLeave();
            }}
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.instagram.com/aks_ramani/" target="_blank"
          onMouseEnter={()=>{
            handleMouseEnter();
          }}
          onMouseLeave={()=>{
            handleMouseLeave();
          }}>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://www.facebook.com/aakash.ramani.112?mibextid=ZbWKwL" target="_blank"
          onMouseEnter={()=>{
            handleMouseEnter();
          }}
          onMouseLeave={()=>{
            handleMouseLeave();
          }}>
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
