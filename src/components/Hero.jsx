function Hero() {
  return (
    <div className="grid grid-cols-2 py-20 px-36 mx-auto justify-start text-xl">
      <div className="flex items-center w-fit">
        {" "}
        <p>
          <span className="font-semibold">Hello</span> , my name is
          <span className="block text-fourth text-8xl font-bold">HAMZA</span>
          a computer science student , <br />
          and a Python programmer.
        <div className="flex gap-12 mt-3">
            <img src="../src/assets/linkedin.png" className="w-8" />
            <img src="../src/assets/github.png" className="w-8" />
        </div>
        </p>
      </div>
      <div className="flex justify-center">
        <img className="w-3/4" src="../src/assets/hero_image.png" alt="" />
      </div>
    </div>
  );
}
export default Hero