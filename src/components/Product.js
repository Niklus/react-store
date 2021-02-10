import { useState } from "react";

export default function Product(props) {
  const [counter, setCounter] = useState(0);

  const handleIncrementClick = () => setCounter(counter + 1);

  const handleDecrementClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const { details } = props;

  return (
    <div className="product">
      <img
        width="50"
        src={details.image}
        alt={details.description}
        title={details.description}
      />
      <div className="product-info">
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
      <div className="product-buttons">
        <button
          className="product-sub"
          onClick={handleDecrementClick}
          disabled={counter ? false : true}
        >
          -
        </button>
        <h3 className="product-count">{counter}</h3>
        <button className="product-add" onClick={handleIncrementClick}>
          +
        </button>
      </div>
    </div>
  );
}
