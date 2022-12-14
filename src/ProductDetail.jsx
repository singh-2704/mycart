import React, { useEffect, useState } from "react";
import { useParams, Link,} from "react-router-dom";
import { dataFromAPI } from "./dataFromAPI";
import { getProductData } from "./api";
import { data } from "autoprefixer";
import {HiArrowSmRight, HiArrowSmLeft} from "react-icons/Hi"



function ProductDetail({onAddToCart}) {
    const [count, setCount] = useState(1);
    const id = +(useParams().id);
    const[product, setProduct] = useState('');
    
    useEffect(function(){
 const p = getProductData(id);
 p.then(function(response){
    setProduct(response.data);
    
   });
    
    }, [id]);
    
    function onButtonClick(event){
      onAddToCart(id, count);
      
       
    }
    function handlechange(event){
        setCount(+event.target.value);
        
    }
    
    
   


    return (
        <>
        
        {product ? <><div className="w-30 flex flex-col m-2 p-2">
            <img className="w-1/2 rounded" src={product.thumbnail} alt="" />
            <h1 className="text-bold">{product.title}</h1>
            <h1 className="text-bold text-blue">{product.description}</h1>
            <h1>Rating : {product.rating}</h1>
            
            <input className="border border-black w-8 rounded" type="number" onChange={handlechange}/>
            <button className="bg-red-500 w-24 rounded p-2" onClick={onButtonClick} >Add to cart</button>
            <div className="flex justify-between">
            <Link to={"/products/" + (id-1)}><HiArrowSmLeft />Previous</Link>
            <Link to={"/products/" + (id+1)}><HiArrowSmRight />Next</Link>
            </div>
        </div></>: (<div>Loading...</div>)}
        </>
    );
}


export default ProductDetail;