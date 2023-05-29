import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY as string
export const stripe = new Stripe(secretKey, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Web Shop'
  }
})