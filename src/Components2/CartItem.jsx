import React from 'react'

function CartItem({data, deleteCart}) {
    let {id, name, price, quantity}= data
    return (
        <div style={{borderBottom:'thin solid gray'}}>
            <h4>{name}</h4>
            <h5>$ {price}.00 x {quantity}</h5>
            <button onClick={deleteCart}>Eliminar</button>
        </div>
    )
}

export default CartItem
