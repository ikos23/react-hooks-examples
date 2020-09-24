import React, { useState, useEffect, useContext } from "react";
import { ThemesContext } from "../useContext/theme-context";

export default function NotificationBar() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [messages, setMessages] = useState([]);
  const { theme } = useContext(ThemesContext);

  useEffect(() => {
    if (isEnabled) {
      const intID = setInterval(() => {
        const newMsg = `Message: ${new Date().toUTCString()}`;
        console.log(newMsg);
        setMessages((prev) => [...prev, newMsg]);
      }, 5000);
      console.log(`setInterval: ${intID}`);

      return () => {
        clearInterval(intID);
        console.log(`clearInterval: ${intID}`);
      };
    }
  }, [isEnabled]);

  return (
    <div style={{ ...theme }}>
      <div>
        <label>
          Enabled:
          <input
            name="isEnabled"
            type="checkbox"
            checked={isEnabled}
            onChange={() => setIsEnabled((prevValue) => !prevValue)}
          />
        </label>
      </div>
      <div>
        {messages.length &&
          messages.map((m, i) => (
            <div
              key={m}
              style={{ width: "180px", padding: "10px", border: "1px solid" }}
            >
              {i}: {m}
            </div>
          ))}
      </div>
    </div>
  );
}
