import React, { useContext } from "react";
import { ReactComponent as Logo } from "../logo.svg";

import { ThemesContext } from "./theme-context";

export default function Card() {
  const { theme, toggleTheme } = useContext(ThemesContext);

  return (
    <div style={{ ...theme }}>
      <div>
        <label>
          Switch Theme:
          <input name="theme" type="checkbox" onChange={toggleTheme} />
        </label>
      </div>
      <Logo width="200" height="150" />
      <div>
        <h4>Title</h4>
        <div>
          Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
          molestie lorem at massa Facilisis in pretium nisl aliquet
        </div>
      </div>
    </div>
  );
}
