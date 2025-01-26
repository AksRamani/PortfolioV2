import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
// import Experience from "./Experience";
// import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [educationData] = useState<Boolean>(true);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>
        <div>
        </div>
        {educationData && <Education />}
        
      </FadeIn>
    </section>
  );
};

export default Resume;
