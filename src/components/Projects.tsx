import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import {  todo,
  userlist,
  gamestore,
  qr,
  skycast,
  taskTrail
 } from "../assets";
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
            link={"https://to-do-aksramani.vercel.app"}
          />
          <ProjectsCard
            title="User Details"
            des="using json placeholder user API create a basic user details project to see the details of listed users."
            src={userlist}
            link={"https://user-react-app.vercel.app/"}

          />
          <ProjectsCard
            title="Game Store"
            des="simple react app for view games details, categories, prices, and other details."
            src={gamestore}
            link={""}

          />
          <ProjectsCard
            title="QR code generator"
            des="create a QR code of any url and change the color of QR code, user can download the QR code."
            src={qr}
            link={"https://qr-generator-aksramanis-projects.vercel.app"}

          />
          <ProjectsCard
            title="sky-cast"
            des="sky-cast is weather application, user can search any city and see the details of the weather."
            src={skycast}
            link={"https://sky-cast-alpha.vercel.app/"}

          />
          <ProjectsCard
            title="TaskTrail"
            des="TaskTrail is a task management app,Add a new task,change status,delete and drag and drop to change status."
            src={taskTrail}
            link={"https://task-trail-git-main-aksramanis-projects.vercel.app/"}

          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
