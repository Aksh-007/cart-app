import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import "../Styles/Home.scss";
import ProductCard from "./ProductCard";


const Home = () => {
  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "1",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "2",
    },
    {
      name: "Mi 11 Ultra 5G",
      price: 69999,
      imgSrc: "https://i02.appmifile.com/867_operator_in/23/04/2021/3849c44ac78d65621750a114811711f9.png?width=140&height=140"
},
{
      name: "Mi 11X Pro 5G",
      price:  39999,
      imgSrc: "https://i02.appmifile.com/52_operator_in/04/03/2021/7db1136dfdc2a1e9fc639b56bc19f17f.png?width=140&height=140"
},
{
      name: "Mi 11X 5G",
      price:  29999,
      imgSrc: "https://i02.appmifile.com/368_operator_in/23/04/2021/93d54b25b3efc3b6e87a9d73004de1c3.png?width=140&height=140"
},
{
      name: "Mi 10T Pro",
      price: 36999,
      imgSrc: "https://i02.appmifile.com/406_operator_in/15/10/2020/4481bf3c3bb2ce53d9f4ac6ce1d7e312.png?width=140&height=140"
},
{
      name: "Mi 10T",
      price: "from ₹ 32,999",
      imgSrc: "https://i02.appmifile.com/938_operator_in/15/10/2020/4e6b056c8984ad7031873ae9b5f564a5.png?width=140&height=140"
},
{
      name: "Mi 10i",
      price: "from ₹ 20,999",
      imgSrc: "https://i02.appmifile.com/606_operator_in/05/01/2021/3de2b587f140a830fc732855a0a76035.png?width=140&height=140"
}
  ];

  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({type:"addToCart", payload:options});
    dispatch({type:"calculatePrice"});
    toast.success('Added to Cart');
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
        ))}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        {productList.map((i) => (
        <ProductCard
          key={i.id}
          src={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
        ))} {productList.map((i) => (
          <ProductCard
            key={i.id}
            src={i.imgSrc}
            name={i.name}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />
          ))}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  );
};

export default Home;
