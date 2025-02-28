"use server";

import { auth, signOut } from "@/auth";
import { PaymentFormValues } from "@/components/shared/features/payment/payment-form";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createStripeCustomerAndPayment({
  name,
  cardNumber,
  cvc,
  expDate,
  paymentType,
}: PaymentFormValues) {
  try {
    const currentUser = await auth();

    if (!currentUser) {
      signOut({ redirectTo: "/onboarding" });
    }
    // Step 1: Create a Stripe customer
    const customer = await stripe.customers.create({
      name,
      email: currentUser?.user.email!,
    });

    const expMonth = expDate.split("/")[1];
    const expYear = expDate.split("/")[0];

    // Step 2: Create a Payment Method (Card)
    const paymentMethod = await stripe.paymentMethods.create({
      // @ts-ignore
      type: "card",
      card: {
        number: cardNumber,
        exp_month: String(expMonth),
        exp_year: String(expYear),
        cvc: cvc,
      },
      billing_details: {
        name,
      },
    });

    // Step 3: Attach the Payment Method to the Customer
    await stripe.paymentMethods.attach(paymentMethod.id, {
      customer: customer.id,
    });

    // Step 4: Set Default Payment Method for Customer (optional)
    await stripe.customers.update(customer.id, {
      invoice_settings: {
        default_payment_method: paymentMethod.id,
      },
    });

    return { customerId: customer.id, paymentMethodId: paymentMethod.id };
  } catch (error) {
    console.error("Stripe Error:", error);
    return { error: "Payment processing failed", message: error };
  }
}
