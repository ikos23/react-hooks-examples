import React from "react";
import "./App.css";

import Calendar from "./useState/Calendar";
import Clock from "./useState/Clock";
import NotificationBar from "./useEffect/NotificationBar";
import Card from "./useContext/Card";

import ThemesContextProvider from "./useContext/theme-context";

function App() {
  return (
    <ThemesContextProvider>
      <div className="App">
        <div>
          <div>Calendar Component</div>
          <Calendar />
        </div>
        <br />
        <div>
          <div>Clock Component</div>
          <Clock />
        </div>
        <br />
        <div>
          <div>NotificationBar Component</div>
          <NotificationBar />
        </div>
        <div>
          <div>Card</div>
          <Card />
        </div>
      </div>
    </ThemesContextProvider>
  );
}

export default App;
