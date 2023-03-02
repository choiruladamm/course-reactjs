import "./App.css";
import { useEffect, useState } from "react";
import { Text } from "./Text";

function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    console.log("COMPONENT MOUNTED");
    return () => {
      console.log("COMPONENT UNMOUNTED");
    };
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show
      </button>
      {showText && <Text />}
    </div>
  );
}

export default App;
