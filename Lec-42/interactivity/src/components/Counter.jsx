import React, { useState } from "react";

const Counter = () => {
//   let count = 0;
  let [count, setCount] = useState(0);
//   let [name, setName] = useState("");
//   let [age, setAge] = useState(0);

  function increment(){
    // count++;
    // setCount(count + 1);
    setCount((prevState)=>{
        return prevState + 1;
    });
    console.log(count)
  }

  return (
    <>
        <button> - 1 </button>
        <div>{count}</div>
        <button onClick={increment}> + 1 </button>
        <button onClick={()=>{
            increment()
            increment()
            increment()
        }}> + 3 </button>
    </>
  );
};

export default Counter;
