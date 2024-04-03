import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../assets";
import { navLinksdata } from "../constants";
import CV from "../assets/images/Aakash_Ramani_Resume.pdf"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 backdrop-blur-2xl transition-colors bg-bodyColor/70 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4">
      <div> 
        <img src={logo} alt="logo" height={"50px"} width={"130px"}/>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>

          ))}
          <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[14cf93] duration-300">
            <a  href={CV} download className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-designColor rounded-full hover:bg-white group">
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-designColor">Download CV</span>
            </a>
          </li>
        </ul>
        <span
          onClick={() => {

            setShowMenu(!showMenu)
          }}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-screen h-screen mdl:hidden overflow-scroll absolute top-0 left-0 bg-[#000] p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 pb-2 relative">
              <div className="mt-[-3px]">
                <img src={logo} alt="logo" height={"80PX"} width={"150PX"} />
                <p className="text-sm text-gray-400 mt-2">
                I'm skilled in HTML, CSS, and JavaScript, including ES6. Proficient in React and Redux, I create dynamic web apps. I use jQuery and Tailwind CSS for design and functionality, ensuring responsive interfaces and cross-browser compatibility. Committed to staying updated in front-end trends for high-quality client products.
                  </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://github.com/AksRamani" target="_blank">
                    <span className="bannerIcon">
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aakash-ramani-541321235/"
                    target="_blank"
                  >
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/aakash.ramani.112?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
