import React, { useEffect, useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.counter);

  function add() {
    setCount(count + 1);
  }

  useEffect(() => {
    let localStorageValue = localStorage.getItem("count");
    // AQUI EU VERIFICO SE HÁ ALGUM VALOR NO LOCALSTORAGE
    // ANTES DE ADICIONAR

    if (localStorageValue) {
      setCount(JSON.parse(localStorageValue));
    }
  }, []);

  useEffect(() => {
    document.title = count;
    localStorage.setItem("count", JSON.stringify(count));
  });

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default Counter;