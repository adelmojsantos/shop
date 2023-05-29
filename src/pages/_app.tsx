import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { HeaderComponent } from "../components/Header"
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext"
import { Container, SidebarMenu } from "../styles/pages/app"

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ShoppingCartProvider>
      <Container>
        <HeaderComponent />
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  )
}