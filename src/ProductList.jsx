import React from "react";
import Product from "./Product";

function ProductList({products}){
  return(
    <>
    <div className="flex gap-4">
    <div className="bg-green-500 p-4 grow">id</div>
    <div className="bg-green-500 p-4 grow">Email</div>
    <div className="bg-green-500 p-4 grow">First Name</div>
    <div className="bg-green-500 p-4 grow">Last Name</div>
    <div className="bg-green-500 p-4 grow">Photograph</div>
    </div>
    <div>
      {products.map(function(item){
        return(<Product
         id ={item.id}
         email ={item.email}
         first_name ={item.first_name}
         last_name ={item.last_name}
         avatar = {item.avatar}
        />)
      })}
    </div>
    </>
  )
}
export default ProductList;
