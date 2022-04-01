import React, { useState } from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";
const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    const newCart = [...cart, selectedItem];
    setCart(newCart);
  };
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <TShirt
            handleAddToCart={handleAddToCart}
            tShirt={tShirt}
            key={tShirt._id}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
