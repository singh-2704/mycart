import React from "react";
import { Link } from "react-router-dom";


function Product({thumbnail, category, title, price, id}){
    return(
       
          <div className="flex flex-col border-2 border-slate-800 border-box	 rounded-md bg-green-500 p-2 	">
            
          <img className="w-full rounded" src={thumbnail}/>
          <h1 className='w-full font-bold text-3xl lg: text-sm'>{category}</h1>
          <h4>{title}</h4>
          <h4>${price}</h4>
          <Link className="text-white" to={"/products/" + id}>view details</Link>
          
          </div>
        
        
    );
    }
    export default Product;