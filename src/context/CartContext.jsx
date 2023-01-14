import { limitToLast } from "@firebase/firestore";
import { createContext, useContext, useState } from "react";

 const CartContext = createContext( [] )

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])

  const addCart = (product) => {
// si esta?
    const idx = cartList.findIndex(prod => prod.id === product.id)
   
   if(idx === 1){

   }else {

   }
   
    setCartList([...cartList, product])
  }

  const totalPrice = () => cartList.reduce((contador, prod) => contador += (prod.precio * prod.cant) , 0)

  const totalQuantity = () => cartList.reduce((contador, producto) => contador += producto.cant , 0)

  const emptyCart = (product) => {
    setCartList([])

  }

  const itemDelet = (id) =>  {
    setCartList( cartList.filter(prod => prod.id !== id ) )
}


  return (
    <CartContext.Provider value={{
      cartList,
      addCart,
      quantity: cartList.length,
      emptyCart,
      totalPrice,
      totalQuantity,
      itemDelet
    }}>
      { children }
    </CartContext.Provider>
  )
}