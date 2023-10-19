import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="counterSection">
      <div className="counterWrapper">
        <p>{count}</p>
        <div className="buttonWrapper">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
