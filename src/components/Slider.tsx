import "../style/marquee.css"

const Slider = () => {
  return (
    <div className="">
    <div className="relative flex overflow-x-hidden overflow-y-hidden border-t border-b translate-y-1/2 rotate-[-5deg] mb-14">
    <div className="py-5 animate-marquee whitespace-nowrap ">
      <span className="text-[40px] pl-[200px]" >"Code with heart, shine with Tailwind." </span>
      <span className="text-[40px] pl-[200px] text-[#00ff00]">Ⓐ </span>
      <span className="text-[40px] pl-[200px]" > "Let's sculpt wonders with React JS."</span>
      <span className="text-[40px] pl-[200px] text-[#00ff00]"> Ⓐ</span>
      <span className="text-[40px] pl-[200px]" > "Transforming visions into interactive marvels."</span>
      <span className="text-[40px] pl-[200px] text-[#00ff00]">Ⓐ </span>

      {/* <span className="text-[40px] pl-[200px]">Marquee Item 4</span>
      <span className="text-[40px] pl-[200px]">Marquee Item 5</span> */}
    </div>
  
    <div className="absolute top-0 py-5 animate-marquee2 whitespace-nowrap pl-1">
      <span className="text-[40px] pl-[200px]" > "Code with heart, shine with Tailwind." </span>
      <span className="text-[40px] pl-[200px] text-[#00ff00]">Ⓐ </span>
      
      <span className="text-[40px] pl-[200px]" > "Let's sculpt wonders with React JS."</span>
      <span className="text-[40px] pl-[200px] text-[#00ff00]">Ⓐ </span>

      <span className="text-[40px] pl-[200px]" > "Transforming visions into interactive marvels."</span>
      <span className="text-[40px] pl-[200px] text-[#00ff00]">Ⓐ </span>

      {/* <span className="text-[50px] mx-4">Marquee Item 4</span>
      <span className="text-[50px] mx-4">Marquee Item 5</span> */}
    </div>
  </div>
  </div>
  )
}

export default Slider