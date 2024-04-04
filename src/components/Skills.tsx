import { motion } from "framer-motion";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import Title from "./Title";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >

        <section
          id="testimonial"
          className="w-full py-20 border-t-[1px] border-t-gray-700 mt-20"
        >
          <div className="flex justify-center items-center text-center">
            <Title title="WHAT CLIENTS SAY" des="My Skills" />
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 text-center">

            <div data-aos="zoom-out-up" className="skills-bannerIcon mx-auto flex flex-col items-center">
              <FaHtml5 />
              <span className="mt-4"> HTML</span>
            </div>
            <div data-aos="zoom-in-up" className="skills-bannerIcon mx-auto flex flex-col items-center ">
              <SiTailwindcss />
              <span className="mt-4">Tailwind</span>
            </div>
            <div data-aos="zoom-out-up" className="skills-bannerIcon mx-auto flex flex-col items-center  ">
              <IoLogoJavascript />
              <span className="mt-4">Javascript</span>
            </div>
            <div data-aos="zoom-in-up" className="skills-bannerIcon mx-auto flex flex-col items-center ">
              <FaReact />
              <span className="mt-4">Reat js</span>
            </div>
            <div data-aos="zoom-out-up" className="skills-bannerIcon mx-auto flex flex-col items-center ">
              <SiRedux />
              <span className="mt-4">Redux</span>
            </div>
            <div data-aos="zoom-in-up" className="skills-bannerIcon mx-auto flex flex-col items-center ">
              <SiNextdotjs />
              <span className="mt-4">Next Js</span>
            </div>
          </div>
        </section>

      </motion.div>
    </>
  );
};

export default Skills;
