import { useState } from "react";
import ProductsList from "./ProductsList";
import AddProductForm from "./AddProductForm";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

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

  function handleDelete(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <>
      <AddProductForm
        name={name}
        description={description}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onFormSubmit={handleFormSubmit}
        validation={validation}
      />
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ProductsList products={products} onDelete={handleDelete} />
    </>
  );
}
