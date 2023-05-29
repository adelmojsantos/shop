import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  priceUnit: number;
  description: string;
  defaultPriceId: string;
  quantity: number;
}

interface ShoppingCartContextType {
  cart: Product[];
  itemsQuantity: number;
  openCart: boolean;
  total: number;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  toggleCart: () => void;
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [openCart, setOpenCart] = useState(false)
  const [cart, setCart] = useState<Product[]>([])
  const [itemsQuantity, setItemsQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  function addItem(product: Product) {
    setCart(state => [...state, product])
    setItemsQuantity(itemsQuantity + product.quantity)

    setTotal(state => state + product.priceUnit)
  }

  function removeItem(product: Product) {
    const newCart = cart.filter(item => item.id !== product.id)
    setCart(newCart)
    setItemsQuantity(itemsQuantity - product.quantity)

    setTotal(state => state - product.priceUnit)
  }

  function toggleCart() {
    setOpenCart(!openCart)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        itemsQuantity,
        toggleCart,
        openCart,
        total
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}