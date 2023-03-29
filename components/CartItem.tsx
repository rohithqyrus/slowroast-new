import Image from "next/image";
import {motion} from "framer-motion"
import { AiOutlineClose } from "react-icons/ai";
import commerce from "../lib/commerce"
import {useCartDispatch} from "../context/cart"
import { toast } from "react-toastify";

const CartItem = ({ item }: { item: any }) => {
    const {setCart} = useCartDispatch();
  const split = item.name.split(",");

  const increaseCart = async() => {
    try{
    await commerce.cart.update(item.id, {quantity: item.quantity + 1}).then((cart:any) => setCart(cart))
    }
    catch(error) {
      toast.error("Something went wrong while adding to the cart. Please try again later.");
    }
  }

  const decreaseCart = async() => {
    try{
    if(item.quantity > 0) {
        await commerce.cart.update(item.id, {quantity: item.quantity - 1}).then((cart:any) => setCart(cart))
    }else {
        await commerce.cart.remove(item.id).then((cart:any) => setCart(cart))
    }
  }catch(error) {
    
    toast.error("Something went wrong while removing from the cart. Please try again later.");
  }
  }

  const removeFromCart = async() => {
    try {
    await commerce.cart.remove(item.id).then((cart:any) => setCart(cart))
    } catch(error) {
      
      toast.error("Something went wrong while removing from the cart. Please try again later.");
    }
  }


  return (
    <motion.div className="flex gap-0 w-full border-b-2 border-darkgreen py-5" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="w-[200px] relative flex items-center justify-center">
        <Image
          src={item.image.url}
          fill={true}
          alt={item.name}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-5 w-full p-3 h-full self-start">
        <div className="flex justify-between items-start gap-5">
          <p className="text-base md:text-lg font-semibold">{split[0]}</p>
          <button className="text-sm md:text-xl" onClick={removeFromCart}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex gap-2 items-center">
            <p className="text-xs font-semibold">Quantity</p>
            <div className="flex gap-5 items-center bg-secondary px-3 rounded-xl">
            <button onClick={decreaseCart}>-</button>
            {item.quantity}
            <button onClick={increaseCart}>+</button>
            </div>
          </div>
          <p className="text-sm font-semibold">${item.quantity * item.price.raw}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
