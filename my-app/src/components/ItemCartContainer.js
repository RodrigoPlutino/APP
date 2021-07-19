import React, { useContext} from "react";
import { orderContext } from "./CartContext";
import ItemCartList from './ItemCartList';
import ItemCartAside from './ItemCartAside';
import {Link} from 'react-router-dom'


function ItemCartContainer() {

    const order = useContext(orderContext);

    return (
        <>
        {order.length >=1 ?
            <div className="col-12 products-section-box ">
                <div className="col-12 col-md-5 item-list-aside-column">
                <ItemCartAside/>
                </div>
                <div className="col-12 col-md-7 item-list-products-column">
                    <ItemCartList/>
                </div>
            </div>
            : 
          <div>
            <h1>El carro se encuentra vacío!</h1>
            <li className="nav__links">
            <Link to="/Products">ir a productos</Link>
            </li>
          </div>
        }
          </>
        )
}

export default ItemCartContainer;
