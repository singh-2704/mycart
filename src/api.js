import axios from "axios";


export function getProductData(id){
   return axios.get("https://dummyjson.com/products/" + id);

}
export function getProductlist(){
return axios.get("https://dummyjson.com/products");

}


