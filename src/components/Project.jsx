const Project = ({project}) => {
  return (
    <div className="border-solid py-5 px-2 rounded-xl border-first border-2 w-64 h-[280px]">
      <div className="flex justify-center items-center gap-3 mb-3">
        {project.name}
      </div>
      <p>
        {project.description}
        <ul className="list-disc pl-5">
          {project.technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))
            }
        </ul>
      </p>
    </div>
  );
}
export default Project