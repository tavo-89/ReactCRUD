import React, {useReducer} from 'react';
import { TYPES } from '../Actions/shoopingActions';
import { shoopingInitial, shooppingReducer } from '../Reducers/shoopingReducer';
import CartItem from './CartItem';
import ProductItem from './ProductItem';

const Shoopingcart = () => {
    const [state, dispatch] = useReducer(shooppingReducer, shoopingInitial)
    const{productos, carrito}=state

    const addToCart = (id)=> {
        dispatch({ type: TYPES.ADD_TO_CART, payload:id })
    }

    const deleteCart = ()=> {

    }

    const clearCart = ()=> {
        dispatch({type: TYPES.CLEAR_CART})
    }
    return (
        <div style={{textAlign:'center'}}>
            <h2>Carrito de compras</h2>
            <h2>Productos</h2>
            <article className="box grid-responsive">
                {productos.map((producto)=> (
                <ProductItem key={producto.id} data={producto} addToCart={addToCart}/>
                ))}
            </article>
            <h3>Carrito</h3>
            <article className="box grid-responsive">
                    <button onClick={clearCart}>limpiar carrito</button>
                    {carrito.map((item, i) => <CartItem key={i} data={item} deleteCart={deleteCart}/>)}
            </article>
        </div>
    );
}

export default Shoopingcart;
