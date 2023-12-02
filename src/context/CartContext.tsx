// CartContext.tsx
'use client'
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Product {
  product_id: number;
  quantity: number;
}

interface Cart {
  items: Product[];
}

interface CartContextProps {
  cart: Cart;
  addItemToCart: (productId: number, quantity: number) => void;
  getTotalProductCount: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({ items: [] });

  useEffect(() => {
    // Load cart data from local storage on component mount
    const storedCartString = localStorage.getItem('visitor_cart');
    const storedCart: Cart = storedCartString ? JSON.parse(storedCartString) : { items: [] };
    setCart(storedCart);
  }, []);

  const addItemToCart = (productId: number, quantity: number): void => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.items.findIndex((item) => item.product_id === productId);

    if (existingItemIndex !== -1) {
      // Update quantity if the item is already in the cart
      const updatedCart = { ...cart };
      updatedCart.items[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add a new item to the cart
      const newItem = {
        product_id: productId,
        quantity: quantity,
      };

      const updatedCart = { ...cart, items: [...cart.items, newItem] };
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    // Save the updated cart to local storage whenever it changes
    if(cart.items.length>0){
    localStorage.setItem('visitor_cart', JSON.stringify(cart));
    }
  }, [cart]);

  const getTotalProductCount = (): number => {
    return cart.items.reduce((acc, item) => acc + item.quantity, 0);
  };

  const contextValue: CartContextProps = {
    cart,
    addItemToCart,
    getTotalProductCount,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};