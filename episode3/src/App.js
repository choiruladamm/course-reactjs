import "./App.css";
import { User } from "./User";
import React from "react";

function App() {
  // const age = 18;
  // const isGreen = true;

  // const names = ["Adam", "Gugus", "Zidan", "Kuncara", "Lukas"];

  const users = [
    {
      name: "Adam",
      age: 18,
      location: "Jakarta",
    },
    {
      name: "James",
      age: 19,
      location: "Medan",
    },
    {
      name: "Choirull",
      age: 20,
      location: "Solo",
    },
  ];

  const planets = [
    {
      name: "Mars",
      isGasPlanets: false,
    },
    {
      name: "Eart",
      isGasPlanets: false,
    },
    {
      name: "Jupiter",
      isGasPlanets: false,
    },
    {
      name: "Venus",
      isGasPlanets: true,
    },
    {
      name: "Neptune",
      isGasPlanets: true,
    },
    {
      name: "Uranus",
      isGasPlanets: true,
    },
  ];
  const animals = [
    {
      name: 'Dog',
      isBuas: true,
    },
    {
      name: 'Kucing',
      isBuas: false,
    },
    {
      name: 'Snake',
      isBuas: true,
    },
  ];

  return (
    <div className="App">
      {/* {age >= 18 ? <h1>Adam</h1> : <h1>Pedro</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This is Color</h1>

      {isGreen && <button>THIS IS BUTTON</button>} */}

      {/* {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })} */}

      {/* {users.map((user, key) => {
        return <User name={user.name} age={user.age} location={user.location} />;
      })} */}

      {/* cara satu  */}
      {/* {planets.map((planet, key) => {
        if (planet.isGasPlanets) return <h1>{planet.name}</h1>
      })} */}

      {/* cara duaa */}
      {/* {planets.map(
        (planet, key) => planet.isGasPlanets && <h1>{planet.name}</h1>
      )} */}

      {/* emaple again */}
      {animals.map((animal, key) => !animal.isBuas && <h1>{animal.name}</h1>)}
    </div>
  );
}

export default App;
