import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataFromAPI } from "./dataFromAPI";
import { getProductData } from "./api";
import { data } from "autoprefixer";



function ProductDetail() {
    const { id } = useParams();
    const[product, setProduct] = useState('');
    useEffect(function(){
 const p = getProductData(id);
 p.then(function(response){
    setProduct(response.data);
   });
    
    }, []);
   


    return (
        <>
        {product ? <><div className="w-30 flex flex-col m-2 p-2">
            <img className="w-1/2 rounded" src={product.thumbnail} alt="" />
            <h1 className="text-bold">{product.title}</h1>
            <h1 className="text-bold text-blue">{product.description}</h1>
            <input className="border border-black w-8 rounded" type="number" />
            <button className="bg-red-500 w-24 rounded p-2">Add to cart</button>
        </div></>: (<div>Loading...</div>)}
        </>
    );
}


export default ProductDetail;