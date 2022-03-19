import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../../utils/getProductos'
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

    const [itemSeleccionado, setItemSeleccionado]= useState({}); 
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams(); //toma el parametro de la url y lo guarda en una variable id.

    useEffect(() => {
        
        // const itemSeleccionadoPromise = new Promise ((aceptado, rechazado)=> {
            
            setTimeout(()=> {
                
                getProductos    
                .then(productos => {   
                    console.log(productos)
                    productos.find(producto => producto.id === itemId )   
                })
                .then((prodEncontrado)=>{
                    console.log(prodEncontrado);
                    setItemSeleccionado(prodEncontrado) 
                })
                .catch(err => console.log(err))    
                .finally(()=> setLoading(false))

            }, 1000)

        // })

    }, [itemId])

    return (
        <>
            <p style={{fontSize: 20, color: "black"}}> 
                Lista 
            </p>
            <div style={{display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'}}>
                {loading 
                    ? 
                <h1>Está ejecutandose la promesa del detalle</h1> 
                    : 
                    <ItemDetail item={itemSeleccionado}/>
                    }
            </div>
        </>
    )
}

export default ItemDetailContainer
