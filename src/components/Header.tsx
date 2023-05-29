import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Handbag, House } from "phosphor-react"
import logoImg from "../assets/logo.svg"
import { useShoppingCart } from "../contexts/ShoppingCartContext"
import { Badge, Header } from "../styles/pages/app"
import { SidebarMenuComponent } from "./SidebarMenu"

export function HeaderComponent() {

  const { itemsQuantity, toggleCart } = useShoppingCart()

  return (
    <Header>
      <SidebarMenuComponent />
      <Image src={logoImg} alt="" />
      <span>
        <Link href={'/'}>
          <House size={24} />
        </Link>
        <button onClick={toggleCart} disabled={itemsQuantity === 0}>
          {itemsQuantity > 0 && <Badge>{itemsQuantity}</Badge>}
          <Handbag size={24} weight="bold" />
        </button>
      </span>
    </Header>
  )
}