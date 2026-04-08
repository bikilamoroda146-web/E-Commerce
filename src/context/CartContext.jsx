import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export function CartProvider ({children}){
const [cartItems, setCartItems] = useState([]);

function addToCart(product){
setCartItems((privItems)=>{
return [...privItems, product]
})
}

const cartCount = cartItems.length;
return(
<CartContext.Provider 
value={{ 
    cartItems,addToCart,
    cartCount 
    }}>
  {children}
</CartContext.Provider>
    )
}
export function useCart(){
    return useContext(CartContext)
}