import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products"

import Head from "next/head"
import { useState } from "react"
import { stripe } from "../../lib/stripe"
import { useShoppingCart } from "../../contexts/ShoppingCartContext"

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
    priceUnit: number;
  }
}

export default function Product({ product }: ProductProps) {
  const { addItem, cart } = useShoppingCart()
  const { isFallback } = useRouter();

  function handleAddItem() {
    const productToAdd = {
      ...product,
      quantity: 1
    }

    addItem(productToAdd)
  }

  const disabledButton = cart?.some(item => item.id === product.id)

  if (isFallback) {
    return (
      <ProductContainer>
        <ImageContainer />

        <ProductDetails>
          <h1></h1>
          <span></span>

          <p>

          </p>

          <button disabled>

          </button>
        </ProductDetails>
      </ProductContainer>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} | Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price} </span>

          <p>
            {product.description}
          </p>

          <button disabled={disabledButton} onClick={handleAddItem}>
            Adicionar a sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await stripe.products.search({
    query: `active:"true"`,
    limit: 3,
  },);

  const paths = response.data.map(item => {
    return { params: { id: item.id } }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id;

  const product = await stripe.products.retrieve(productId as string, {
    expand: ['default_price']
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        priceUnit: price.unit_amount,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount as number / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 2
  }
}