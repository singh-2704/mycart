import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";




function ProductListPage({ products }) {
  let {id} = useParams();
  return (
<div className="m-20 grid grid-cols-3 gap-4 aspect-square	">
    {products.map(function (item) {
      return (
      <>
      <Product
        key={item.id}{...item}
        />
      
      </>
      );
    })}
    </div>
  );
}

export default ProductListPage;
