const Projects = () => {
  return (
    <div>
      <hr className="h-0.5 bg-first border-0"></hr>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:p-20 p-10">
        <div className="border-solid py-5 px-2 rounded-xl border-first border-2 w-64">
          <div className="flex justify-center items-center gap-3 mb-3">
            <img src="../src/assets/github.png" alt="" className="w-6" />
            GUI Qr Code Gen
          </div>
          <p>
            A simple graphical user interface to facilitate generating qr codes
            implemented using :
            <ul className="list-disc pl-5">
              <li>PyQt6m.</li>
              <li>Qrm.</li>
              <li>PIL.</li>
            </ul>
          </p>
        </div>
        <div className="border-solid py-5 px-2  rounded-xl border-first border-2 w-64">
          <div className="flex justify-center items-center gap-3  mb-3">
            <img src="../src/assets/github.png" alt="" className="w-6" />
            Portfolio Website
          </div>
          <p>
            A simple static portfolio website to showcase my skills and provide
            more information about me. technology I used :
            <ul className="list-disc pl-5">
              <li>React.</li>
              <li>Tailwind.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Projects