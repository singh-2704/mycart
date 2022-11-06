import React from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";


function Navbar({totalProducts}){
   
    return(
        
        <div className="flex justify-between bg-gray-300">
           
    <div className="w-1/3 ">
    <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" /></div>
    <div className="flex flex-col">
    <span className="m-2">{totalProducts}</span>
    <div className="text-3xl "><AiOutlineShoppingCart/></div>
    
    </div>
    </div>
    );

};

export default Navbar;
