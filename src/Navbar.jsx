import React from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";


function Navbar(){
    return(
        <div className="flex justify-between bg-gray-300">
    <div className="w-1/3">
    <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" /></div>
    <div className="m-12 text-4xl items-center	"><AiOutlineShoppingCart/></div>
    
    </div>
    );

};

export default Navbar;
