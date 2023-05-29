import { GetStaticProps } from "next";
import Image from "next/image";
import Link from 'next/link';
import Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react';
import { stripe } from "../lib/stripe";
import { Arrow, Dots, HomeContainer, NavigationWrapper, Product } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css';
import Head from "next/head";
import { useState } from "react";
import { CaretLeft, CaretRight, Plus } from "phosphor-react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 3,
      spacing: 36,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Shop</title>
      </Head>
      <NavigationWrapper>
        <HomeContainer ref={sliderRef} className="keen-slider">
          {products.map(product => {
            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                prefetch={false}
              >
                <Product className="keen-slider__slide">
                  <Image alt="" src={product.imageUrl} width={520} height={480} />

                  <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </footer>
                </Product>
              </Link>
            )
          })}
        </HomeContainer>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              className="left"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            >
              <CaretLeft size={36} weight="bold" />
            </Arrow>

            <Arrow
              className="right"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide === instanceRef.current.track.details.maxIdx
              }
            >
              <CaretRight size={36} weight="bold" />
            </Arrow>
          </>
        )}
      </NavigationWrapper>
      {loaded && instanceRef.current && (
        <Dots>
          {
            [...Array(instanceRef?.current?.track?.details?.maxIdx + 1).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={(currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
        </Dots>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number / 100),
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, //a cada 2 horas gera a página novamente
  }
}