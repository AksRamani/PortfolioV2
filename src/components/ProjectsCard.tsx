import { CiGlobe } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";


interface Props {
  title: string;
  des: string;
  src: string;
  link:string;
}

const ProjectsCard = ({ title, des, src, link }: Props) => {
  
  const handleMouseEnter = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.add('cursor-active');

  }
const handleMouseLeave = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.remove('cursor-active');
  }
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <a className="w-full h-[80%] overflow-hidden rounded-lg" onClick={()=>{
        window.open(link , "_blank");
      }}>
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </a>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href="https://github.com/AksRamani" target="_blank"
                 onMouseEnter={()=>{
                  handleMouseEnter();
                }}
                onMouseLeave={()=>{
                  handleMouseLeave();
                }}>
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <BsGithub />
                </span>
              </a>
              <a href={link} target="_blank"
                 onMouseEnter={()=>{
                  handleMouseEnter();
                }}
                onMouseLeave={()=>{
                  handleMouseLeave();
                }}>
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <CiGlobe />
                </span>
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
