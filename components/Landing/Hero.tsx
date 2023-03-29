import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {

  const container = {
    hidden: {
      opacity: 0,
      scale: 1.3
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.8,
      },
    },
  }

  const item = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'ease',
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className="w-full h-screen bg-no-repeat bg-cover grid p-6 md:px-20 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="self-end justify-self-start flex flex-col gap-3 pb-10" variants={item}>
        <motion.p className="text-sm font-poppins" variants={item}>slowroast coffee</motion.p>
        <motion.h1 className="font-semibold text-4xl lg:text-5xl max-w-[15em] leading-normal lg:leading-normal" variants={item}>
          EXQUISITE COFFEES ROASTED WITH EXPERT CARE
        </motion.h1>
        <Link href="/shop">
          <motion.button className="bg-white py-3 px-16 self-start rounded-xl font-lora text-black" variants={item}>
            Shop All Coffees
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
