import React from 'react'
import ItemListContainer from '../components/ItemList'
import ItemListAside from '../components/ItemListAside'
import "../styles/styles.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;


function Products() {


    return (
        <div id="products-section">
            <div className="col-12 products-section-box ">
            <ItemListAside/>
            <ItemListContainer/>
            </div>
        </div>
    )
}

export default Products
