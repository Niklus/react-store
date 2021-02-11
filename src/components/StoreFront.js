import { useState } from "react";
import Product from "./Product.js";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValidation("Please enter a name");
      return;
    }
    if (!description) {
      setValidation("Please enter a description");
      return;
    }
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name,
        description,
      },
    ]);
    setName("");
    setDescription("");
    setValidation("");
  }

  function handleDeleteButton(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="product-name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="product-name"
            placeholder="Enter the name"
            className="textfield"
          />
        </div>
        <div>
          <label htmlFor="product-description">Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="product-description"
            placeholder="Enter the description"
            className="textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation-message">{validation}</div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add product"
          />
        </div>
      </form>
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ul className="store-front">
        {products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button
              className="btn-outline btn-delete"
              onClick={() => handleDeleteButton(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
