import React from "react";



function TableRow({num, index}){
    console.log("TableRow is running")
    return(
        <div>
        {num} x {index} = {num * index}
        </div>
    );
}
export default TableRow;