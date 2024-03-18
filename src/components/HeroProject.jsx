const HeroProject = () => {
  return (
    <div className="grid md:grid-cols-2 py-10 md:px-36 px-8 mx-auto justify-start text-xl">
      <div className="flex justify-center order-2 md:order-1">
        <img className="w-3/4" src="../images/portfolio_image.png" alt="" />
      </div>
      <div className="flex  flex-col w-fit items-end order-1 md:order-2">
        <p className="text-5xl font-semibold text-first" dir="rtl">
          A collection <br /> of
          <span className="text-fourth"> projects </span>I have worked on
        </p>
        <p dir="rtl" className="text-first mt-3">
          I will continue to expand on <br />
          the current collection with more <br />
          sophisticated projects <br />
        </p>
      </div>
    </div>
  );
};
export default HeroProject;
