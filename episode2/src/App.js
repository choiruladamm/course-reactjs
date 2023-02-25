import "./App.css";

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

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

const FormatDate = (date) => {
  return date.toLocaleDateString();
};

const Comments = (props) => {
  return (
    <div>
      <img src={props.author.img} alt={props.author.name}></img>
      <h1>{FormatDate(props.date)}</h1>
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
