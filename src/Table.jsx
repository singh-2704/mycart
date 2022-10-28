import React, {useState} from 'react';
import TableRow from './TableRow';


function Table(){
console.log("Table function is running")
const [number, updatenum] = useState(2);
function nextTable(){
console.log("next table is running")

updatenum (number + 1);

      }
  return(
    <div>
    <button className="bg-indigo-500 rounded-md px-3 py-1" onClick={nextTable}>next</button>
   <TableRow num={number} index={1}/>
   <TableRow num={number} index={2}/>
   <TableRow num={number} index={3}/>
   <TableRow num={number} index={4}/>
   <TableRow num={number} index={6}/>
   <TableRow num={number} index={7}/>
   <TableRow num={number} index={8}/>
   <TableRow num={number} index={9}/>
   <TableRow num={number} index={10}/>
   </div>
  );
}

export default Table;
