import React from "react";
import Skill from "./Skill";
import * as data from "../Data/Data.json";
import Title from "./Title";

const Skills = () => {
  return (
    <div>
      <hr className="h-0.5 bg-first border-0"></hr>
      <div className="py-10">
        <Title title="Skills" color="1" />
        <div className="flex flex-wrap py-5  px-12 md:px-60 mx-auto gap-4 justify-center">
          {data.skills.map((item, index) => (
            <Skill key={index} skill={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
