'use client'
import Image from "next/image"
import { CartProducts, CloseButton, ImageContainer, SidebarMenu } from "../styles/pages/app"
import { useShoppingCart } from "../contexts/ShoppingCartContext"
import { X } from "phosphor-react"
import { useState } from "react";
import axios from "axios";

export function SidebarMenuComponent() {
  const {
    cart,
    itemsQuantity,
    openCart,
    toggleCart,
    removeItem,
    total
  } = useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const lineItems = cart.map(item => {
        return {
          price: item.defaultPriceId,
          quantity: item.quantity,
        }
      })
      const response = await axios.post('/api/checkout', { lineItems })

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <SidebarMenu className={!openCart ? 'close' : ''}>
      <CloseButton onClick={toggleCart}>
        <X size={20} weight="bold" />
      </CloseButton>
      <h4>Sacola de compras</h4>
      <CartProducts>
        {cart.map(item => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <Image src={item.imageUrl} alt="" width={100} height={100} />
              </ImageContainer>
              <span>
                <p>{item.name}</p>
                <span>{item.price} </span>
                <button className="remove-button" onClick={() => removeItem(item)}>Remover</button>
              </span>
            </div>
          )
        })}

        <footer>
          <div className="itens">
            <p>Quantidade</p>
            <span>{itemsQuantity} {itemsQuantity > 1 ? 'itens' : 'item'}</span>
          </div>
          <div className="values">
            <p>Valor Total</p>
            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(total / 100)}
            </span>
          </div>
          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Finalizar Compra
          </button>
        </footer>
      </CartProducts>
    </SidebarMenu>
  )
}