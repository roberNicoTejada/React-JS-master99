import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail(item) {
    return (
        <div>
            <img src={item.srcImagen} alt={item.alt} />        
            <h3>{item.nombre}</h3>
            <p>{item.description}</p>
            <p>{item.precio}</p>
            <ItemCount stock={item.stock}/>
        </div>
    )
}

export default ItemDetail
