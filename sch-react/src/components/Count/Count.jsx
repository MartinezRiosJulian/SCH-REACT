import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const sumar = () => {
    setCount(count + 1);
  };
//   const restar = () => {
//     setCount = (count - 1);
//   };

  return (
    <div>
      {count}
      {<button onClick={sumar}> + </button>}
      {/* {<button onClick={restar}> - </button>} */}
    </div>
  );
};

export default Count;

//   const cambiarEstado = () => {
//     setBool(!bool);
//   };
