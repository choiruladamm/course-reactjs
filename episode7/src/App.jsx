import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  // TODO: EXAMPLE ONE
  // const [catFact, setCatFact] = useState("");

  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });
  // };

  // useEffect(() => {
  //   fetchCatFact();
  // }, []);

  // TODO: EXAMPLE TWO
  // const [name, setName] = useState("");
  // const [predictedAge, setPredictedAge] = useState(null);
  // const fetchData = () => {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setPredictedAge(res.data);
  //   });
  // };

  // TODO: EXERCISE
  const [generateExcuse, setGenerateExcuse] = useState("");
  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGenerateExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      {/* // TODO: EXAMPLE ONE */}
      {/* <button onClick={fetchCatFact}>Generate</button>
      <p>{catFact}</p> */}

      {/* // TODO: EXAMPLE TWO */}
      {/* <div>
        <input
          placeholder="Ex. Adam"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1> */}

      {/* // TODO: EXERCISE */}
      <button onClick={() => fetchData("party")}>Party</button>
      <button onClick={() => fetchData("family")}>Family</button>
      <button onClick={() => fetchData("gaming")}>Gaming</button>
      <h1>{generateExcuse}</h1>
    </div>
  );
}

export default App;
