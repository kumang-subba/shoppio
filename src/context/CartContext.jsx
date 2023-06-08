import { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemDetails, setItemDetails] = useState(false);
  const totalInCart = cartItems.reduce((tot, item) => item.quantity + tot, 0);
  function getQuantity(id) {
    return cartItems.find((item) => item.id == id?.quantity || 0);
  }
  function increaseQuantity(id, size, amount) {
    setCartItems((curr) => {
      if (curr.find((item) => item.id === id) == null) {
        return [...curr, { id, quantity: amount, size: size }];
      } else {
        if (curr.find((item) => item.size == size) == null) {
          return [...curr, { id, quantity: amount, size: size }];
        } else {
          return curr.map((item) => {
            if (item.id === id && item.size == size) {
              return { ...item, quantity: item.quantity + amount };
            }
            return item;
          });
        }
      }
    });
  }
  const openCart = () => {
    if (cartItems?.length > 0) {
      handleCloseItemDetails();
      setIsCartOpen(true);
    }
  };
  const closeCart = () => {
    setItemDetails(false);
    setIsCartOpen(false);
  };
  const toggleCart = () => {
    if (cartItems.length > 0) {
      setIsCartOpen(!isCartOpen);
    }
  };
  const handleCloseItemDetails = () => {
    setItemDetails(false);
  };
  const handleOpenItemDetails = () => {
    setItemDetails(true);
  };
  function removeFromCart(id, size) {
    setCartItems((curr) => {
      return curr.filter((item) => !(item.id === id && item.size === size));
    });
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalInCart,
        getQuantity,
        increaseQuantity,
        isCartOpen,
        openCart,
        closeCart,
        handleCloseItemDetails,
        itemDetails,
        handleOpenItemDetails,
        removeFromCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
