import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      {/* <div className="hidden">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of DVI (2006 - 2010)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] height-box border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-justify">
          <ResumeCard
            title="Co - Founder"
            subTitle="Codegrin Technologies - (November/2024 - Present)"
            result="Rajkot"
            des="As Co-founder of Codegrin Technologies, I am dedicated to driving innovation and delivering cutting-edge technological solutions that empower businesses to thrive. My role involves shaping the company's vision, building strategic partnerships, and leading teams to create impactful products and services. At Codegrin Technologies, our mission is to redefine excellence in technology and provide seamless experiences for our clients."
          />
          <ResumeCard
            title="Jr. Web Developer"
            subTitle="Cipher Craft Pvt. Ltd - (March/2023 - December/2024)"
            result="Rajkot"
            des="At Cipher Craft provided the catalyst for my journey to advance my skills in React. Through dedication, mentorship, and hands-on experience, I transformed from a novice to a proficient React developer, equipped with the knowledge and confidence to tackle even the most challenging projects. As I continue to grow and evolve in my career, I carry with me the lessons learned and the experiences gained on this transformative journey toward mastery in React. "
          />
          <ResumeCard
            title="Web Developer & Trainee"
            subTitle="Hopiant Pvt. Ltd - (July/2022 - Jan/2023)"
            result="Junagadh"
            des="At Hopiant i got training in javaScript, Javasacript ES6, Jquery, Shopify-hydrogen, Tailwind CSS and React-Js And also worked on live projects as part of development teams."
          />
          <ResumeCard
            title="Internship "
            subTitle="Vnurture Technologies (June - 2022)"
            result="Ahemdabad (WFH)"
            des="15 Days Internship as a part of 7th sem GTU. During that 15 days internship i get basic knowledge about the reactjs and javascript."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
