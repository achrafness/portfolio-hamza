import Title from "./Title"
import CardFields from "./CardFields";
import * as data from "../Data/Data.json"
const FieldsOfInterest = () => {
  console.log(data.fieldsOfInterest);
  return (
    <div className="bg-first pt-10">
      <Title title="Fields of interest" color="2" />
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center px-12 md:px-60 justify-evenly py-10">
        {data.fieldsOfInterest.map((item, index) => (
          <CardFields key={index} title={item[0]} src={item[1]} />
        ))}
      </div>
    </div>
  );
}
export default FieldsOfInterest