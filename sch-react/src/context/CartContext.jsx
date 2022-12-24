import { createContext, useState, useContext } from "react";
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.findIndex(product => product.id === id)

    const addItem = (newProductCart) => {
        let index = isInCart(newProductCart.id)
        if (index === -1) {
            setCartList([...cartList, newProductCart])
        } else {
            cartList[index].quantity += newProductCart.quantity
            setCartList([...cartList])
        }

    }

    const removeItem = (id) => {
        setCartList(cartList.filter(product => product.id !== id))
    }

    const qTotal = () => {
        return cartList.reduce((count, product) => count += product.quantity, 0)
    }

    const priceF = () => {
        return cartList.reduce((addPrice, product) => addPrice += (product.quantity * product.price), 0)
    }

    const cleanCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            qTotal,
            priceF,
            cleanCart
        }}>

            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider