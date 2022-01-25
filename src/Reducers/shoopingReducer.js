import { TYPES } from "../Actions/shoopingActions";

export const shoppingInitial = {
    productos: [
        { id: 1, name: "Producto 1", price: 100 },
        { id: 2, name: "Producto 2", price: 200 },
        { id: 3, name: "Producto 3", price: 300 },
        { id: 4, name: "Producto 4", price: 400 },
        { id: 5, name: "Producto 5", price: 500 },
        { id: 6, name: "Producto 6", price: 600 },
    ],
    carrito: [],
    };

    export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
        let newItem = state.productos.find(
            (product) => product.id === action.payload
        );
        //console.log(newItem);

        let itemIncarrito = state.carrito.find((item) => item.id === newItem.id);

        return itemIncarrito
            ? {
                ...state,
                carrito: state.carrito.map((item) =>
                item.id === newItem.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
            }
            : {
                ...state,
                carrito: [...state.carrito, { ...newItem, quantity: 1 }],
            };
        }
        case TYPES.REMOVE_ONE_CART: {
        let itemToDelete = state.carrito.find((item) => item.id === action.payload);

        return itemToDelete.quantity > 1
            ? {
                ...state,
                carrito: state.carrito.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
            }
            : {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.REMOVE_ALL_CART: {
        return {
            ...state,
            carrito: state.carrito.filter((item) => item.id !== action.payload),
        };
        }
        case TYPES.CLEAR_CART:
        return shoppingInitial;
        default:
        return state;
    }
}