import "./App.css";
import { Axios } from "axios";

function App() {
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  // Axios.get("https://catfact.ninja/fact").then((res) => {
  //   console.log(res.data);
  // });
  return (
    <div className="App">
      <button>Generate Random Text</button>
      <h1></h1>
    </div>
  );
}

export default App;
