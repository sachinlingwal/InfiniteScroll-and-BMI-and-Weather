import React from "react";

const Test1 = () => {
  const sales = {
    john: 50,
    sally: 40,
    rob: 60,
  };
  //   console.log(Object.values(sales));
  //   console.log(Object.keys(sales));
  //   console.log(Object.entries(sales));

  const sum = (obj) => {
    let sum = 0;
    for (let value of Object.values(obj)) {
      sum += value;
    }
    return sum;
  };
  console.log(sum(sales));

  const personSales = (obj) => {
    for (let [key, value] of Object.entries(obj)) {
      console.log(`${key} and ${value}`);
    }
  };
  console.log(personSales(sales));

  return <div>Test1</div>;
};

export default Test1;
