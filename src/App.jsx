import React, { useState } from 'react';

const App = () => {

  let time = new Date().toLocaleTimeString();

  const state = useState();

  const[cTime, setCtime] = useState(time);

  const UpdateTime = () => {
    
    time = new Date().toLocaleTimeString();

    setCtime(time);
  }

  setInterval(UpdateTime,1);

  return(
    <>
      <div className="container">
      <h1>{ time }</h1>
      </div>
    </>
  );

};

export default App;
