import React from "react";

const Test = () => {
  const [nightMode, nightModeChanged] = useNightMode();

  const nightModeCallback = () => {
    nightModeChanged();
  };
  return (
    <>
      <button> click me</button>
    </>
  );
};

export default Test;
