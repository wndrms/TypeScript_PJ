import React from 'react';
import Button from "./components/button";
import TextToJson from "./components/TextToJson";

function App() {
  const alarm = () => {
    alert("Hi~");
  };
  return (
    <div>
      <TextToJson></TextToJson>
    </div>
  );
}

export default App;
