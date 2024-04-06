// import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { CgWebsite } from "react-icons/cg";


const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="SEO Optimisation"
            des="With a keen eye for SEO optimization, I excel in crafting websites that not only look great but also rank high on search engines. From keyword research to on-page optimization, I leverage proven techniques to improve your website's visibility and drive targeted traffic. Let's collaborate to make your online presence stand out in today's competitive landscape."
            icon={<SiProgress />}
          />
          <Card
            title="Web Development"
            des="With expertise in HTML, CSS, JavaScript, and a range of web development frameworks, I bring visions to life on the digital landscape. Specializing in creating intuitive and responsive websites, I prioritize user experience and functionality. Whether it's crafting sleek designs or optimizing performance, I strive for excellence in every aspect of web development. Let's work together to transform your ideas into captivating online solutions that leave a lasting impression."
            icon={<CgWebsite />}
          />
          <Card
            title="UX Design"
            des="Blending the art of web development with the science of UX design, I specialize in creating websites that deliver a seamless user experience. Through thoughtful design and meticulous coding, I strive to create digital solutions that exceed expectations. Let's work together to build a website that not only looks beautiful but also engages your audience effectively."
            icon={<SiAntdesign />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
