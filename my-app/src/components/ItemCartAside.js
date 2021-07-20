import React, { useState, useContext, useEffect } from "react";
import {Link} from "react-router-dom";
import { orderContext } from "./CartContext";
import {getFirestore} from '../Firebase/Firebase'

function ItemCartAside() {
    const order = useContext(orderContext);
    const [buyer, setBuyer] = useState({});
    const [pedidos, setPedidos] = useState();
  
    function sendBuy(pedidos) {
      const db = getFirestore();
      const orders = db.collection("order");

      orders
        .add(pedidos)
        .then(({ id }) => {
          console.log("se registro");
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(console.log("proceso finalizado"));

        let Arr1 = order;
          Arr1.splice(0,Arr1.length);
          

    }
  
    function getBuyer(event) {
      let temp = { ...buyer };
      if (event.target.attributes.placeholder.nodeValue === "nombre") {
        let nombre = event.target.value;
        temp.name = nombre;
      } else if (event.target.attributes.placeholder.nodeValue === "apellido") {
        let apellido = event.target.value;
        temp.surname = apellido;
      } else {
        let telefono = event.target.value;
        temp.phone = telefono;
      }
      setBuyer(temp);
    }
  
    useEffect(() => {
      setPedidos({ buyer: buyer, orders: order });
    }, [buyer, order]);

    console.log(pedidos);

    return (
        <>
            <h2>Carrito  checkout</h2>

            <form className="carrito">
          <input placeholder="nombre" onChange={getBuyer} className="formu" requiered></input>
          <input placeholder="apellido" onChange={getBuyer} className="formu" requiered></input>
          <input placeholder="cellPhone" onChange={getBuyer} className="formu" requiered></input>
          </form>
          
          {!buyer.name || !buyer.surname || !buyer.phone ? (
            <button  disabled>
              Finalizar compra
            </button>
          ) : (
            <Link to="/"><button  onClick={()=>sendBuy(pedidos)}>Finalizar compra</button></Link>
          )}
    </>
  );
}

export default ItemCartAside;
