const Achievement = ({title,list}) => {
  return (
    <div className="pb-10">
      <hr className="h-0.5 bg-first border-0"></hr>
      <div className="md:px-72 px-8 py-10">
        <h2 className=" text-fourth text-5xl font-extrabold pb-5">
          {title}
        </h2>
        <ul className="list-disc pl-5 text-first leading-10">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Achievement