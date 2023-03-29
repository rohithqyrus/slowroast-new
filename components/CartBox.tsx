import { useCartState } from "@/context/cart";
import CartItem from "./CartItem";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import MenuContext from "@/context/menu";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const CartBox = ({ handleClick }: { handleClick: any }) => {
  const { menu, setMenu } = useContext(MenuContext);
  const { line_items } = useCartState();

  const calculateTotal = () => {
    let total = 0;
    line_items.map((item: any) => {
      total = total + item.price.raw * item.quantity;
    });
    return total;
  };

  const total = calculateTotal();

  return (
    <motion.div
      className="fixed w-full h-screen bg-[#00000042] top-0 z-30"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
    >
      <div className="fixed w-full lg:w-[40%] bg-primary text-darkgreen h-screen top-0 right-0  p-6 grid grid-cols-1">
        <div>
          <div className="flex justify-between border-b-2 border-darkgreen pb-2 items-center">
            <h3 className="text-3xl font-semibold">Your Cart</h3>
            <button onClick={() => setMenu(false)}>
              <AiOutlineClose className="text-xl" />
            </button>
          </div>
          <div className="flex flex-col gap-5 pt-10">
            <AnimatePresence>
            {line_items.map((item: any, index: number) => (
              <CartItem item={item} key={index} />
            ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="self-end justify-self-stretch flex flex-col gap-3">
          <p className="justify-self-end self-end text-lg font-semibold">
            Total: ${total}
          </p>
          <Link href="/checkout" className="bg-red-800 text-white  p-5 text-center rounded-xl" onClick={() => setMenu(false)}>
            Continue to Checkout
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CartBox;
