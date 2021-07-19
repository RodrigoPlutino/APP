import React from "react";

import "../styles/styles.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;


function ItemCartSkeletonTotal(props) {

  
  const currency_price = parseInt(props.total).toLocaleString(
    'es-AR',
    {
      style: 'currency',
      currency: 'ARS'
    }
  )
  

  return (
    <div id={props.id} class="card">
    <img class="card-img-top col-4" src="{props.image}" alt="Imagen carrito"></img>
    <div class="card-body col.8">
      <h5 class="card-title">TOTAL</h5>
      <h4 class="card-text">{currency_price}</h4>
      <p class="card-text-small">Cantidad de Articulos: {props.cantidad}</p>
    </div>
  </div>
  );
}

export default ItemCartSkeletonTotal;
