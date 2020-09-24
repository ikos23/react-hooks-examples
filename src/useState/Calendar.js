import React, { useContext, useState } from "react";
import moment from "moment";
import { ThemesContext } from "../useContext/theme-context";

// This is a very basic example of useState hook
export default function Calendar() {
  const [day, setDay] = useState("__");
  const [month, setMonth] = useState("__");
  const [year, setYear] = useState("____");

  const { theme } = useContext(ThemesContext);

  function handleChange(e) {
    e.preventDefault();

    const { name, value } = e.target;

    if (name === "day") {
      setDay(value);
    } else if (name === "month") {
      setMonth(value);
    } else {
      setYear(value);
    }
  }

  return (
    <div style={{ ...theme }}>
      <div>Select Date:</div>
      <div>
        <input
          name="day"
          placeholder="dd"
          maxLength="2"
          style={{ width: "25px" }}
          onChange={handleChange}
        />
        <input
          name="month"
          placeholder="MM"
          maxLength="2"
          style={{ width: "25px" }}
          onChange={handleChange}
        />
        <input
          name="year"
          placeholder="yyyy"
          maxLength="4"
          style={{ width: "100px" }}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          color: moment({ year, month: month - 1, day }).isValid()
            ? "green"
            : "red",
          fontWeight: "bold",
        }}
      >
        Date: {day.length === 1 ? `0${day}` : day} /{" "}
        {month.length === 1 ? `0${month}` : month} / {year}
      </div>
    </div>
  );
}
