const CardFields = ({title,src}) => {
  return (
    <div className="border-white w-48 h-44 border-solid border-[1px] flex items-center justify-evenly flex-col p-5 rounded-xl">
      <img
        className="w-20"
        src={src}
        alt={title}
      />
      <p className="text-white">{title}</p>
    </div>
  );
}
export default CardFields