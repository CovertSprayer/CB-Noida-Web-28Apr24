import Header from "./components/Header";
import Main from "./components/Main";
import Person from "./components/Person";

function App() {
  const data = [
    { name: "Deepak Kalal", age: 36, profession: "Influencer" },
    { name: "Deepak Kalal 2", age: 36, profession: "Influencer 2" },
    { name: "Deepak Kalal 3", age: 36, profession: "Influencer 3" },
  ];

  return (
    <>
      {/* <Header/>
      <Main/> */}

      {data.map((personData) => (
        <Person name={personData.name} age={personData.age} profession={personData.profession} />
      ))}

      {/* <Person name="Deepak kalal" age="36" profession="Influencer"/>
      <Person name="Puneet Superstar" age="40" profession="Influencer"/>
      <Person name="Jitender kumar" age="30" profession="Content Creater"/> */}
    </>
  );
}

export default App;
