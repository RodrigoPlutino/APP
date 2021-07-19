import React from 'react'
import { getFirestore } from "../Firebase/Firebase";

function ItemCartAside() {
    return (
        <>
            <h2>Carrito & checkout</h2>

        <form action="/my-handling-form-page" method="post">
            <ul>
                <li>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="user_name"></input>
                </li>
                <li>
                    <label for="mail">Correo electrónico:</label>
                    <input type="email" id="mail" name="user_mail"></input>
                </li>
                <li>
                    <label for="msg">Mensaje:</label>
                    <textarea id="msg" name="user_message"></textarea>
                </li>
            </ul>
        </form>
        </>
    )
}

export default ItemCartAside;
