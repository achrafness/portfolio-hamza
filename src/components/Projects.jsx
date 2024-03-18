import * as data from "../Data/Data.json"
import Project from "./Project";
const Projects = () => {
  return (
    <div>
      <hr className="h-0.5 bg-first border-0"></hr>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:p-20 p-10">
        {data.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
