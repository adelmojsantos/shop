import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra Efetuada</h1>

        <ImageContainer>
          {products.map((product, index) => {
            return (
              <Image key={`${index}-${product.name}`} alt="" src={product.imageUrl} height={110} width={120} />
            )
          })}
        </ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length} {products.length > 1 ? 'camisetas' : 'camiseta'} já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  // const product = session.line_items?.data[0].price?.product as Stripe.Product
  const products = session.line_items?.data.map(item => {
    console.log(item)
    const product = item.price?.product as Stripe.Product

    return {
      name: product?.name,
      imageUrl: product?.images[0]
    }
  })
  return {
    props: {
      customerName,
      products
    }
  }
}