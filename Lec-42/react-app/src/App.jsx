// import './App.css'

import Child from "./components/Child";

function App() {
  const name = "Shreyance";

  const num = 2;

  // let something = null;

  // if(num > 5){
  //   something = "Num is greater than 5"
  // }else{
  //   something = "Num is less than 5"
  // }

  function getData(data){
    console.log(data);
  }

  const movieNames = ["ABCD", "Spiderman", "Thor", "Venom", "Venom 2"]

  return (
    <>
      <p>Hello from parent</p>
      <Child name={name} number={num} getData={getData} />
    </>
  )

  return (
    <>
      <h1>Hi there, {name}</h1>

      {/* <h1>{something}</h1> */}
      {/* {if()else()} ---- wrong */}

      {
        num > 5 ? 
        <h1>Num is greater than 5</h1> 
        : 
        <h1>Num is less than 5</h1>
      }

      {movieNames.map((name, ind) => {
        return <li key={ind}>{name}</li>
      })}
    </>
  );
}

export default App;
