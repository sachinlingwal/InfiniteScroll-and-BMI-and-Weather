import React from "react";

const Test = () => {
  let arr1 = [1, 2, 3, 4];
  let arr2 = ["a", "b", "c", "d"];

  let result = arr2.entries();
  for (let value of result) {
    console.log(value);
  }
  const person = {
    name: "dom",
    age: 29,
  };
  for (const [key, value] of Object.entries(person)) {
    console.log(`key=> ${key} | value =>${value}`);
  }
  return <div>Test</div>;
};

export default Test;
