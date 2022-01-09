import { TYPES } from "../Actions/shoopingActions";

export const shoopingInitial = {
    productos:[
        {id:1,name:'producto 1', price:100},
        {id:2,name:'producto 2', price:200},
        {id:3,name:'producto 3', price:300},
        {id:4,name:'producto 4', price:400},
        {id:5,name:'producto 5', price:500}
    ],
    carrito:[]
}

export const shooppingReducer = (state, action)=> {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.productos.find((producto)  => producto.id === action.payload)

            let itemCart = state.carrito.find(item => item.id === newItem.id)

            return itemCart ? {...state, carrito:state.carrito.map(item => item.id === newItem.id ? {...item, quantity : item.quantity + 1}: item)} : {...state, carrito:[...state.carrito, {...newItem, quantity: 1}]}

        }
        case TYPES.REMOVE_ONE_CART:{

        }
        case TYPES.REMOVE_ALL_CART:{

        }
        case TYPES.CLEAR_CART:{
            return shoopingInitial
        }
        default:
            return state
    }
}