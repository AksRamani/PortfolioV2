import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import {  todo,
  userlist,
  gamestore,
  ansonbelt,
  neat,
  myr } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="TODO App"
            des="Basic to TODO Project where user can add, edit or delete their tasks or list or any other information."
            src={todo}
          />
          <ProjectsCard
            title="User Details"
            des="using json placeholder user API create a basic user details project to see the details of listed users."
            src={userlist}

          />
          <ProjectsCard
            title="Game Store"
            des="simple react app for view games details, categories, prices, and other details."
            src={gamestore}

          />
          <ProjectsCard
            title="Anson Belt"
            des="at Anson Belt user can buy and customize belts as per choice."
            src={ansonbelt}

          />
          <ProjectsCard
            title="Neat Method"
            des="Neat Method is provid service for home organizations in USA and UK. Their helps to keep neat and clean Home, And also provide gadgets and other things (-baskets,stickers,drawers,hangers,containers) which helps to organize properties"
            src={neat}

          />
          <ProjectsCard
            title="Myr.ai"
            des="Myr.ai allows operators to enhance and simplify their work and their tasks. They become autonomous, generators of data thanks to digital reports and can interact with all stakeholders - customers, managers, replacements, to guarantee the quality of the service."
            src={myr}

          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
