import React,{useContext} from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom';
import { orderContext } from "../components/CartContext";

function NavBar(props) {
  const order = useContext(orderContext);

  const disabled = {
    width: order <= 0 ? '0px': '45px'
  }

const ocultar= {
  color: order <=0 ? '#FFFFFF': '#000000'
}

//const color = {
  //color : 'white',
//}

const acumulador = order.reduce((acu,element)=>acu + element.cantidad,0)

  return (
    <header>
      <nav>
      <ul className="nav__links">
                    <li><Link exact to="/">Inicio</Link></li>
                    <li><Link to="/Products">Productos</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <Link to="/Carrito" ><img src="https://image.flaticon.com/icons/png/512/711/711979.png" alt="carrito" className="img" style={disabled}></img></Link>
                    <li 
                    style={ocultar}>{acumulador}</li>
                </ul>
      </nav>
    </header>
  )
}

export default NavBar
