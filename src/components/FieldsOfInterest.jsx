import Title from "./Title"
import CardFields from "./CardFields";
import data from "../Data/Data"
const FieldsOfInterest = () => {
  console.log(data.fieldsOfInterest);
  return (
    <div className="bg-first pt-10">
      <Title title="Fields of interest" color="2" />
      <div className="flex items-center px-60 justify-evenly py-10">
        {data.fieldsOfInterest.map((item, index) => (
          <CardFields key={index} title={item[0]} src={item[1]} />
        ))}
      </div>
    </div>
  );
}
export default FieldsOfInterest