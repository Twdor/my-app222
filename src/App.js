import logo from './logo.svg';
import './App.css';
// import {useEffect, useState} from "react";
// import axios from "axios";

function App() {
  // const [ceva, setCeva] = useState(null);
  //
  // useEffect(() => {
  //   // axios.get("http://localhost:8080/api/client/check/username/Ad34431")
  //   axios.get("/api/client/check/username/Ad34431")
  //   // axios.get("/hello")
  //   // axios.get("/api/client/check/email/AdiG", {headers: {Authorization: "Bearer cesajndsjnd3342"}})
  //     .then((res) => setCeva(res.data))
  //     .catch((err) => console.log(err.response.status))
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{color: "red"}}>Felling good this night...:D</div>
        {/*{ceva && <div style={{color: "red"}}>{ceva}</div>}*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
