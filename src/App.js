import "./styles.css";
import React, { useState } from "react";

var array = "";
export default function App() {
  const [Array, setArray] = useState([]);
  const [Filtred, setFiltred] = useState([]);
  var handleInputChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    setArray([...Array, array]);
  };
  var handleSearch = (event) => {
    setFiltred(Array.filter((word) => word.includes(event.target.value)));
  };
  return (
    <div>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div>
        Test : <br />
        <input
          onChange={(event) => {
            array = event.target.value;
          }}
        />
        <input type="submit" onClick={handleInputChange} />
      </div>
      <div>
        {Filtred.map((name) => (
          <h2>{name}</h2>
        ))}
      </div>
    </div>
  );
}
