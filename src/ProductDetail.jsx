import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataFromAPI } from "./dataFromAPI";
import { getProductData } from "./api";
import { data } from "autoprefixer";
import {GrLinkNext, GrLinkPrevious} from "react-icons/Gr"


function ProductDetail({onAddToCart}) {
    const [count, setCount] = useState(1);
    const {id} = useParams();
    const[product, setProduct] = useState('');
    
    useEffect(function(){
 const p = getProductData(id);
 p.then(function(response){
    setProduct(response.data);
    
   });
    
    }, []);
    
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
            <span className="flex flex-row justify-between"><button><GrLinkPrevious path="/product/:id-1"/></button><button><GrLinkNext path="/product/:id+1"/></button>
            </span>
        </div></>: (<div>Loading...</div>)}
        </>
    );
}


export default ProductDetail;