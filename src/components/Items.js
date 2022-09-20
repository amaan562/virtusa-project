import React from "react";
import Product from "./Product"; 
import '../Styles/Product.css'
export default function Items({AllItems}) { 
   
  return (
    <div className="main--page">
        <br></br>
        <h1>Training Courses</h1>
      <section className="all--items">
        {
            AllItems.map((item,id) => (         
              <Product
                key={id}
                item={item}
              />
            ))
        }
      </section>
    </div>
  );
}
