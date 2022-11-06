import React from "react";

function Product({ id, email, first_name, last_name,avatar }) {
  return (
    <>
      
      <div className="flex">
        <div className="grow">{id}</div>
        <div className="grow">{email}</div>
        <div className="grow">{first_name}</div>
        <div className="grow">{last_name}</div>
        <img className="grow w-3" src={avatar} alt="person image" />

      </div>
    </>
  )
}
export default Product;
