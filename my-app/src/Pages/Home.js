import React from 'react'
import HomeCarrousel from '../components/HomeCarrousel'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;


function Home() {
    return (
        <div className="Home">
            <h1>Bienvenidos a TechnoHouse </h1>
            <div>
                <p>para hacer una compra haz click en productos!</p>
            </div>
            <HomeCarrousel/>
        </div>
    )
}

export default Home