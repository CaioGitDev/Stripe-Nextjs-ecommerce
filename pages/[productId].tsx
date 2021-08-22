import { GetStaticPaths, GetStaticProps } from 'next'
import react from 'react'
import Stripe from 'stripe'
import stripeConfig from '../config/stripe'

const Product: React.FC = () => {
  return <h1>Product page</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27'
  })

  // const skus = await stripe.skus.create({
  //   currency: 'eur',
  //   inventory: {
  //     type: 'finite',
  //     quantity: 500,
  //   },
  //   price: 1500,
  //   product: 'prod_K5Yfvaf1koRL61',
  // })
  // const products = await stripe.products.list()
  // console.log(skus, products)

  return {
    paths: [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Product