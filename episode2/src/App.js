import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="James" age={21} email="james@james.com" />
      <User name="Axell" age={21} email="axell@axell.com" />
      <User name="Adam" age={21} email="adam@adam.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
