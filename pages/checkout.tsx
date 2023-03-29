import CheckoutDetail from "@/components/Checkout/CheckoutDetail";
import CheckoutItems from "@/components/Checkout/CheckoutItems";
import { useCartState } from "@/context/cart";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const Checkout = () => {
  const [success, setSuccess] = useState(false);
  const { line_items } = useCartState();
  return (
    <>
      {!success ? (
        <>
          <Head>
            <title>slowroast - Cofee</title>
            <meta
              name="description"
              content="slowroast : coffee slowroasted to perfection. Unique small-lot coffees from our globe-spanning network of artisan
            producers, roasted to perfection and delivered to you each month."
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {Array.isArray(line_items) && line_items.length ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-20 my-20 min-h-screen">
              <CheckoutDetail setSuccess={setSuccess} />
              <CheckoutItems />
            </div>
          ) : (
            <motion.div
              className="grid items-center justify-items-center min-h-screen bg-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col gap-5 text-center items-center bg-primary p-10 rounded-xl shadow-xl">
                <Image src="/logo.svg" width={200} height={200} alt="logo" />
                <p className="text-xl font-semibold">
                  There is no item in the cart. Please buy something.
                </p>
                <Link
                  href="/shop"
                  className="px-10 py-2 bg-red-800 rounded-xl text-primary"
                >
                  Go to Shop
                </Link>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        <motion.div
          className="px-6 md:px-20 my-20 bg-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid items-center justify-items-center min-h-screen">
            <div className="flex flex-col gap-5 text-center items-center bg-primary p-10 rounded-xl shadow-xl">
              <Image src="/logo.svg" width={200} height={200} alt="logo" />
              <p className="text-xl font-semibold">
                Order has been completed. Thank you for shopping with us.
              </p>
              <Link
                href="/shop"
                className="px-10 py-2 bg-darkgreen rounded-xl text-primary"
              >
                Go to Shop
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Checkout;
