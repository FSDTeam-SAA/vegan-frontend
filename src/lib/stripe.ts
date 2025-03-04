import { loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<import("@stripe/stripe-js").Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
        "pk_test_51QcKSvEJ5Etrau31j163wuJI52wfJclRISajUwzNexvrUf2F0CCJkDq9L9QbQx34J9Nuhcrxmbrfx6Job4FEt4g400a4NEUc2F",
    );
  }
  return stripePromise;
};

export default getStripe;
