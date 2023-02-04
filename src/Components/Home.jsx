import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import "../Styles/Home.scss";
import ProductCard from "./ProductCard";
import data from '../data/data.json'


const Home = () => {
 
  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({type:"addToCart", payload:options});
    dispatch({type:"calculatePrice"});
    toast.success('Added to Cart');
  };

  return (
    <div className="home">
      {data.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
        ))}
        
    </div>
  );
};

export default Home;
