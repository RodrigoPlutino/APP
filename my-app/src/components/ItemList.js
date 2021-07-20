import React, { useState, useEffect } from "react";
import ItemListSkeleton from "./ItemListSkeleton";
import "../styles/styles.css";
import {getFirestore} from '../Firebase/Firebase'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;


function ItemList() {

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);



  //useEffect(() => {
  //  fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648")
  //    .then((res) => res.json())
  //    .then((res) => {
  //      setProducts(res.results);
  //    });
  //}, []);
  

  useEffect(() => {
    setLoad(true);
    const db = getFirestore();
    const itemCollection = db.collection("products");
    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          console.log("No results");
        }
        setProducts(querySnapShot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);


  return (
    <div className="col-12 col-md-8 item-list-products-column">
      {
        products.map((products, index)=>{return(
          <ItemListSkeleton 
          key={index} 
          id={products.id}
          image={products.thumbnail} 
          name={products.title} 
          precio={products.price} 
          description={products.description} 
          stock={products.available_quantity}/>
        )})
      }
    </div>
  );
}

export default ItemList;
