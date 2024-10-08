/* eslint-disable @typescript-eslint/no-explicit-any */

import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "./Title";
import {  p1, p2, p3 } from "../assets";
import { FadeIn } from "./FadeIn";


function SampleNextArrow(props: any) {
  const { onClick } = props;
  const handleMouseEnter = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.add('cursor-active');

  }
const handleMouseLeave = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.remove('cursor-active');
  }

  return (
    <div
      className="w-14 h-12  bg-[#161616] hover:bg-black duration-300 rounded-md text-2xl border-[#2C2C2F] border text-gray-400 flex justify-center items-center mt-2 absolute bottom-[-60px] right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
      onMouseEnter={()=>{
        handleMouseEnter();
      }}
      onMouseLeave={()=>{
        handleMouseLeave();
      }}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;

  const handleMouseEnter = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.add('cursor-active');

  }
const handleMouseLeave = () =>{
    const cursor = document.querySelector('.cursor');
    cursor?.classList.remove('cursor-active');
  }
  return (
    <div
      className="w-14 h-12 bg-[#161616] hover:bg-black duration-300 rounded-md text-2xl border-[#2C2C2F] border text-gray-400 flex justify-center items-center mt-2 absolute bottom-[-60px] right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
      onMouseEnter={()=>{
        handleMouseEnter();
      }}
      onMouseLeave={()=>{
        handleMouseLeave();
      }}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: () => {
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    )
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="WHAT CLIENTS SAY" des="Testimonial" />
        </div>
        <div className="max-w-6xl mx-auto">
          {/* ================ Slider One ================== */}
          <Slider {...settings}>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between items-center">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={p1}
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    CodeCraft Innovations
                    </p>
                    <h3 className="text-2xl font-bold">Emily Smith</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <div className="w-full h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-[#0000]">
                      <div>
                        <div className="d-flex flex justify-between">
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        GAME STORE
                        </h3>
                        <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      <div className="text-white gap-1">
                        <RiStarFill />
                      </div>
                      </div>
                        </div>
                        <p className="text-base text-gray-400 mt-3">
                          via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                        </p>
                      </div>
                     
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A dolorum, eos natus ipsum numquam veniam officia
                      necessitatibus ratione quos debitis exercitationem
                      repudiandae facilis id neque nihil accusantium
                      perspiciatis repellat? Iste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Two ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between items-center">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={p2}
                    alt="testimonialTwo"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    ByteTech Solutions - Trolola
                    </p>
                    <h3 className="text-2xl font-bold">Michael Williams</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <div className="w-full h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-[#0000]">
                      <div>
                        <div className="d-flex flex justify-between">
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        QR GENERATOR
                        </h3>
                        <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                        </div>
                        <p className="text-base text-gray-400 mt-3">
                          via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                        </p>
                      </div>
                      
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A dolorum, eos natus ipsum numquam veniam officia
                      necessitatibus ratione quos debitis exercitationem
                      repudiandae facilis id neque nihil accusantium
                      perspiciatis repellat? Iste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Three ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between items-center">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#020617] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={p3}
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-2xl font-bold">Sarah Johnson</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <div className="w-full h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-[#0000]">
                      <div>
                        <div className="d-flex flex justify-between">
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        SKY-CAST
                        </h3>
                        <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                        </div>
                        <p className="text-base text-gray-400 mt-3">
                          via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                        </p>
                      </div>

                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A dolorum, eos natus ipsum numquam veniam officia
                      necessitatibus ratione quos debitis exercitationem
                      repudiandae facilis id neque nihil accusantium
                      perspiciatis repellat? Iste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonial;
