import { useCartState } from "@/context/cart";
import { useState } from "react";
import CheckoutBox from "./CheckoutBox";
import { BsFillArrowRightCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs"
import { animate, AnimatePresence } from "framer-motion";
import {motion} from "framer-motion"

const CheckoutItems = () => {
  const { line_items } = useCartState();
  const [showSummary, setShowSummary] = useState(window.innerWidth >= 768 ? true : false);
  const shipping = 10;

  const calculateTotal = () => {
    let total = 0;
    line_items.map((item: any) => {
      total = total + item.price.raw * item.quantity;
    });
    return total;
  };

  const total = calculateTotal();
  return (
    <>
      <div className="flex flex-col gap-5 order-first md:order-last p-6 md:p-10 bg-secondary rounded-xl ">
        <button
          onClick={() => setShowSummary(!showSummary)}
          className="flex justify-between border-b-2 border-darkgreen w-full text-xl font-semibold"
        >
          <p className="flex gap-3 items-center">{showSummary ? <BsFillArrowDownCircleFill /> : <BsFillArrowRightCircleFill /> }Order Summary</p>
          <p>${total <= 0 ? 0 : shipping + total}</p>
        </button>
        <AnimatePresence>
        {showSummary && (
          <motion.div className="flex flex-col gap-5" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 20}}>
            <h2>Your Selection</h2>
            {line_items.map((item: any) => (
              <CheckoutBox key={item.id} item={item} />
            ))}
            <div className="flex justify-between border-b-2 border-darkgreen mt-20">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <div className="flex justify-between border-b-2 border-darkgreen">
              <p>Shipping</p>
              <p>${total <= 0 ? 0 : shipping + total}</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p className="text-xl font-semibold">${total <= 0 ? 0 : shipping + total}</p>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CheckoutItems;
