const Title = ({ title, color }) => {
  return (
    <div
      className={`font-bold text-center text-5xl ${
        color == 1 ? "text-fourth" : color == 2 ? "text-white":"text-first"
      }`}
    >
      {title}
    </div>
  );
};

export default Title;
