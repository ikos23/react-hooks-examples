import React, { useState, useEffect, useContext } from "react";
import { ThemesContext } from "../useContext/theme-context";

const initialState = () => {
  console.log("Trying to compute initial date...");

  for (let i = 0; i < 1000000000; i++) {}

  console.log("Initial date computed.");

  return new Date();
};

// This is an example of useState hook, but let's assume
// the initial state is the result of an expensive computation!
export default function Clock() {
  const [date, setDate] = useState(initialState);
  const { theme } = useContext(ThemesContext);

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    console.log(`Setup timer ${timerID}.`);

    return () => {
      clearInterval(timerID);
      console.log(`Cleanup timer ${timerID}.`);
    };
  }, []);

  return (
    <div style={{ ...theme }}>
      <h4>Hello, world!</h4>
      <h5>It is {date.toLocaleTimeString()}.</h5>
    </div>
  );
}
