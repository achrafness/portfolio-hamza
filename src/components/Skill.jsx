function Skill({skill}) {
  return (
    <div className="text-fourth border-[1.5px] border-solid border-first px-5 py-2 rounded-full">
      {skill
        .toLowerCase()
        .replace(/(^|\s)\S/g, (match) => match.toUpperCase())}
    </div>
  );
}
export default Skill;
