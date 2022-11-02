import React from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";


function Navbar({totalProducts}){
    return(
        
        <div className="flex justify-between bg-gray-300">
            <span>{totalProducts}</span>
    <div className="w-1/3 ">
    <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" /></div>
    <div className="text-3xl m-10"><AiOutlineShoppingCart/></div>
    
    </div>
    );

};

export default Navbar;
