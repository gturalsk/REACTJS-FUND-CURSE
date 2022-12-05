import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import "./components/styles/App.css";

function App() {
  const [value, setValue] = useState("текст в инпуте");

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javackript</strong>
          <div>Javackript - это язык программирование!</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
