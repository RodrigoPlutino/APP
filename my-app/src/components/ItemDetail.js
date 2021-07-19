import React from 'react'
import ItemDetailSkeleton from './ItemDetailSkeleton'
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react';

function ItemDetail() {

  const [produ,setProdu] = useState([])

  let {product_id} = useParams()
  

  useEffect(()=>{
    fetch(`https://api.mercadolibre.com/items/${product_id}?include_attributes-all`)
    .then(res => res.json())
    .then(res =>{setProdu(res)})
  },[product_id])


  return (
    <div>
        <ItemDetailSkeleton props={produ}/>
    </div>
  )
}

export default ItemDetail;
