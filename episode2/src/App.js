import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <User name="James" age={21} email="james@james.com" />
      <User name="Axell" age={21} email="axell@axell.com" />
      <User name="Adam" age={21} email="adam@adam.com" /> */}
      {/* <Job salary="100000" position="IT" company="Google" />
      <Job salary="999999" position="Software Enginer" company="Netlix" />
      <Job salary="888888" position="Front End" company="Tokopedia" /> */}
      <Comments {...dataComments} />
      <Home room="Room Axel" clothes="Uniqlo" smartphone="Iphone 14 Pro Max" />
      <MyButton />
      <MyButton />
    </div>
  );
}

const MyButton = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className="btn " onClick={handleClick}>
      <span>Clicked {count} times</span>
    </button>
  );
};

// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

// const Job = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   );
// };

const Home = (props) => {
  return (
    <div>
      <h1>{props.room}</h1>
      <h1>{props.clothes}</h1>
      <h1>{props.smartphone}</h1>
    </div>
  );
};

const cormatDate = (date) => {
  return date.toLocaleDateString();
};

const Comments = (props) => {
  return (
    <div>
      <img src={props.author.img} alt={props.author.name}></img>
      <h3>{props.author.name}</h3>
      <h1>{cormatDate(props.date)}</h1>
    </div>
  );
};

const dataComments = {
  date: new Date(),
  author: {
    name: "James",
    img: "http://placekitten.com/g/64/64",
  },
};

export default App;
