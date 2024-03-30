import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaReact, FaHtml5, FaInstagram, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import { IoLogoJavascript } from "react-icons/io5";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Web Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Aakash Ramani</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#00ff00" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        I am proficient in HTML, CSS, and JavaScript, including ES6 syntax. I have also worked extensively with React and Redux for building dynamic and scalable web applications. Additionally, I have knowledge of jQuery and Tailwind CSS to enhance the functionality and design of websites. My skills include creating responsive and user-friendly interfaces while ensuring cross-browser compatibility. I am capable of collaborating with designers and back-end developers to deliver high-quality products that meet client requirements. With a strong foundation in front-end development technologies, I am committed to staying updated with the latest trends and best practices in the field.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            {/* <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a> */}
            <a
              href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            {/* <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a> */}
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
