import "./styles.css";
import React, { useState } from 'react';

var array="";
export default function App() {
  const [Array, setArray] = useState([]);
  var handleInputChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    setArray([...Array,array]);
  }
  return (
    <div>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div>
        Test : <br/>
          <input onChange={(event)=>{array=event.target.value}}/>
          <input type="submit" onClick={handleInputChange}/>
      </div>
      <div>
        {Array.map(name => <h2>{name}</h2>)}
      </div>
    </div>
  );
}
