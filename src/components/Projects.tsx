import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import {  todo,
  userlist,
  gamestore,
  qr,
  skycast } from "../assets";
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
            title="QR code generator"
            des="create a QR code of any url and change the color of QR code, user can download the QR code."
            src={qr}

          />
          <ProjectsCard
            title="sky-cast"
            des="sky-cast is weather application, user can search any city and see the details of the weather."
            src={skycast}

          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
