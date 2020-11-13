import { QueryComponentReducer } from "../../reducers";
import { QueryComponentContext } from "../../contexts";
import { useReducer } from "react";

//import logo from "../../logo.svg";
import "./App.css";
import HomePage from "../../pages/HomePage";
import Header from "../Header";

function App() {
  const [state, dispatch] = useReducer(QueryComponentReducer);

  return (
    // <QueryComponentContext.Provider value={{ state, dispatch }}>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // </QueryComponentContext.Provider>
    <QueryComponentContext.Provider value={{ state, dispatch }}>
      <Header />
      <HomePage />
    </QueryComponentContext.Provider>
  );
}

export default App;
