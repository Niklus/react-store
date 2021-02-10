import Product from "./Product";

export default function StoreFront() {
  // hardcoded products for this project
  const products = [
    {
      name: "Cheese",
      description: "200g cheese block",
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png",
    },
    {
      name: "Milk",
      description: "1L of milk",
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png",
    },
  ];
  return (
    <div className="store-front">
      {products.map((product, i) => {
        return <Product details={product} key={i} />;
      })}
    </div>
  );
}
