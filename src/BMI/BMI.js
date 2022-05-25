import React, { useState } from "react";
import Chart from "./Chart";
import classes from "./Bmi.module.css";
const BMI = () => {
  const [data, setData] = useState({
    height: "",
    weight: "",
  });
  const { height, weight } = data;
  const [result, setResult] = useState("");
  const [series, setSeries] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value });
  };

  const canCalculate = Boolean(height) && Boolean(weight);
  let heightInM = height / 100;

  const handleCalculate = () => {
    let bmi = (weight / (heightInM * heightInM)).toFixed(2);
    setResult(bmi);
    setSeries([...series, Math.round(bmi)]);
  };
  console.log(series);
  return (
    <div className={classes.container}>
      <div className={classes.bmiCalculatoreContainer}>
        <h1>BMI Calculator</h1>
        <div className={classes.input}>
          <p>Height (in cm)</p>
          <input
            type="number"
            onChange={handleInput}
            name="height"
            value={height}
            placeholder="Enter Your Height"
          />
        </div>
        <div className={classes.input}>
          <p>Weight (in kg)</p>
          <input
            type="number"
            onChange={handleInput}
            name="weight"
            value={weight}
            placeholder="Enter Your Weight"
          />
        </div>
        <button disabled={!canCalculate} onClick={handleCalculate}>
          Calculate
        </button>
        <div className={classes.result}>
          Your BMI Result ::
          {result
            ? result < 18.6 && (
                <h3 style={{ color: "rgb(7, 110, 244)" }}>
                  Under Weight : {result}
                </h3>
              )
            : ""}
          {result >= 18.6 && result < 24.9 && (
            <h3 style={{ color: "rgb(7, 244, 82)" }}>
              Normal Weight : {result}
            </h3>
          )}
          {result > 24.9 && (
            <h3 style={{ color: "red" }}>Over Weight : {result}</h3>
          )}
        </div>
      </div>
      <Chart series={series} />
    </div>
  );
};

export default BMI;
