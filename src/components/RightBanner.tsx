// import { bannerImg } from "../assets";
import { FadeIn } from "./FadeIn";
import photo  from "../assets/images/PSB_0512.jpg"

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[270px] h-[400px] lgl:w-[450px] lgl:h-[680px] z-10"
        src={photo}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[450px] lgl:w-[500px] lgl:h-[725px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-shadowOne flex justify-center items-center -mb-[25px]"></div>
    </FadeIn>
  );
};

export default RightBanner;
