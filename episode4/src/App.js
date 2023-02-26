import "./App.css";
import { useState } from "react";

function App() {
  // counter state management
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  };

  // input state management
  const [inputValue, setInputValue] = useState("Type something in input");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // show/hide state management buttons
  const [showText, setShowText] = useState(true);

  // toogle change color
  const [changeColor, setChangeColor] = useState("black");

  // exercise state
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const setZeroCount = () => {
    setCount(0);
  };

  // repeat toogle ubah warna state management
  const [ubahWarna, setUbahWarna] = useState("orange");

  // repeat toogel tambah counter
  const [tambahCounter, setTambahCounter] = useState(0);

  // repeat lihat typing di inputan
  const [lihatInputan, setLihatInputan] = useState("Ketik di inputan");
  const handleLihatInputan = (event) => {
    setLihatInputan(event.target.value);
  };

  return (
    <div className="App">
      <h1 style={{ marginBottom: "3rem", fontSize: "4rem" }}>
        Example Case State
      </h1>
      {/* Counter */}
      <h1>Age: {age}</h1>
      <button onClick={increaseAge}>Increase Age</button>

      {/* show text */}
      <div>
        <input type="text" onChange={handleInputChange} />
        <h1>{inputValue}</h1>
      </div>

      {/* toogle show text */}
      <div>
        <button
          onClick={() => {
            setShowText(!showText);
          }}
        >
          Show / Hide
        </button>
        {showText && <h1>My Name is Adamm</h1>}
      </div>

      {/* toogle change color */}
      <div>
        <button
          onClick={() => {
            setChangeColor(changeColor === "black" ? "blue" : "black");
          }}
        >
          Change Color
        </button>
        <h1 style={{ color: changeColor }}>Axelll </h1>
      </div>

      {/* exercise state */}
      <h1 style={{ marginBottom: "3rem", fontSize: "4rem" }}>Exercise</h1>

      <div>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={setZeroCount}>Set Zero</button>
        <h1>Count: {count}</h1>
      </div>

      {/* repeat toogle ubah warna state management */}
      <button
        onClick={() => {
          setUbahWarna(ubahWarna === "orange" ? "red" : "orange");
        }}
      >
        Ubah Warna
      </button>
      <h1 style={{ color: ubahWarna }}>Choirulll</h1>

      {/* repeat exercise counter */}
      <h1>Counter: {tambahCounter}</h1>
      <button
        onClick={() => {
          setTambahCounter(tambahCounter + 1);
        }}
      >
        Ubah Counter
      </button>

      {/* repate exercise show inputan */}
      <div>
        <input type="text" onChange={handleLihatInputan}/>
        <h1>{lihatInputan}</h1>
      </div>

      {/* bottom margin */}
      <div style={{ marginBottom: "3rem" }}></div>
    </div>
  );
}

export default App;
