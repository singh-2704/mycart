import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import ProductListPage from "./ProductListPage";
import {getProductlist} from './api';
import { dataFromAPI } from "./dataFromAPI";
import Navbar from "./Navbar";




function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [cart, setCart] = useState({});
  function AddToCart(productId, count){
//  let oldcount = cart[productId] ;


setTotalCount(count + totalCount);
//  const newCart = {...cart, [productId]: oldcount + count}
//  setCart(newCart);
 
//  const cartString = JSON.stringify(newCart);
//  localStorage.setItem("myCart", cartString);
  };
  
 
  // const totalCount = object.keys(cart).reduce(function(output, current){
  //   return output + cart[current]
  // },0);
  
  
  const [productList, setProductList] = useState([]);
  const [sort, setSort] = useState('default');
  const [Query, setQuery] = useState('');
 
  useEffect(function(){
    const xyz = getProductlist();
    xyz.then(function(response){
      const d = response.data.products;
    setProductList(d);
    dataFromAPI.push(...d);
    });
     }, []);
 

  let data = productList.filter(function(item){
    const TitleLowerCase = item.title.toLowerCase();
    const QueryLowerCase = Query.toLowerCase();
return TitleLowerCase.indexOf(QueryLowerCase) != -1;

});



  function handleQuery(event){
    setQuery(event.target.value);
    console.log('handleQuery is running')
  }
  function handleSortChange(event) {
    setSort(event.target.value);
  }
  if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    }
    )
  }
  else if (sort == "price") {
    data.sort(function (x, y) {
      return x.price - y.price;
    })
  }


  return (
    <>
    <Navbar  totalProducts = {totalCount}/>
    <div className="flex justify-between">
      <input className="border border-green-500 rounded-md m-10 p-4" onChange={handleQuery} value={Query}
      type="text" placeholder="search" />
      <select onChange={handleSortChange} value={sort} className="border border-gray-500 rounded-md m-10">
        <option value="default">sort by default</option>
        <option value="name">sort by name</option>
        <option value="price">sort by price</option>
      </select>
      </div>
      <Routes>
        <Route index element={<ProductListPage products={data} />} />
        <Route path="/products/:id" element={<ProductDetail onAddToCart={AddToCart}/>} />
      </Routes>
    </>
  );
}
export default App;
