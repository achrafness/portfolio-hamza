import Achievement from "./Achievement";
import * as data from "../Data/Data.json";
const achievements = () => {
  console.log(data.Achievements.Education);
  return (
    <div>
      <Achievement title={"Education"} list={data.Achievements.Education} />
      <Achievement
        title={"Certificates"}
        list={data.Achievements.Certificates}
      />
      <Achievement title={"Extracurricular Activities"} list={data.Achievements.ExtracurricularActivities} />
    </div>
  );
};
export default achievements;
