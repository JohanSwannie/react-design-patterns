const LargePersonListItem = ({ person }) => {
  const { name, age, haircolor, hobbies } = person;
  return (
    <>
      <h4>{name}</h4>
      <p>Age: {age} years</p>
      <p>Haircolor: {haircolor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

export default LargePersonListItem;
