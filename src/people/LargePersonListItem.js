import Hobbies from "./Hobbies";

const LargePersonListItem = ({ person }) => {
  const { name, age, haircolor, hobbies } = person;
  return (
    <>
      <h4>{name}</h4>
      <p>Age: {age} years</p>
      <p>Haircolor: {haircolor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, key) => (
          <Hobbies key={key} hobby={hobby} />
        ))}
      </ul>
    </>
  );
};

export default LargePersonListItem;
