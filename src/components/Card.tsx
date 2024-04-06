import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import FeatureModal from "./FeatureModal";

interface Props {
  title: string;
  des: string;
  icon: React.ReactNode;
}

const Card = ({ title, des, icon }: Props) => {
  const [showModal, setshowModal] = useState(false);
  useEffect(() => {
    if (!showModal) {
      document.body.classList.remove("overflow-hidden");
    }

  }, [showModal])
  
  return (
    <>
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base overflow-hidden text-clip	 h-24">{des}</p>
            <a href="#/" onClick={() =>(setshowModal(true))}>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    {
      showModal ?
      <>
      <FeatureModal
       showModal={showModal}
       setShowModal={setshowModal}
       title={title}
       des={des}
       icon={icon}
      />
      </>
      : <></>

    }
    </>
  );
};

export default Card;
