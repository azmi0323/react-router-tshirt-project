import React from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";
const Home = () => {
  const [tShirts,setTShirts] = useTShirts();
  return (
  <div className="home-container">
      <div className="tshirt-container">
        {
          tShirts.map(tShirt=><TShirt tShirt={tShirt} key={tShirt._id}></TShirt>)
        }
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
  </div>
  );
};

export default Home;
