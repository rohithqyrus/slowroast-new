import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsFillCartFill } from "react-icons/bs";
import MenuContext from "@/context/menu";
import { useCartState } from "@/context/cart";
import CartBox from "./CartBox";
import { AnimatePresence, motion } from "framer-motion";
import {HiOutlineMenuAlt3} from "react-icons/hi"
import {AiOutlineCloseCircle} from "react-icons/ai"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const [hState, sethState] = useState("top");
  const router = useRouter();
  const { total_items } = useCartState();
  const [showCart, setShowCart] = useState(false);
  const { menu, setMenu } = useContext(MenuContext);

  useEffect(() => {
    var lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };

    window.addEventListener("resize", () => {
      window.innerWidth > 768 && setToggle(false);
    });
  }, []);

  const links = [
    { id: "/shop", title: "Shop" },
    { id: "/about", title: "About Us" },
    { id: "/contact", title: "Contact" },
  ];

  const Navlink = ({ link }: { link: any }) => {
    return (
      <li
        className={`hover:text-red-900 font-medium text-lg transition-all ${
          link.id === active && "text-red-900"
        }`}
      >
        <Link href={`${link.id}`} onClick={() => setActive(link.id)}>
          {link.title}
        </Link>
      </li>
    );
  };

  const NavlinkMobile = ({ link }: { link: any }) => {
    return (
      <li className="font-medium text-xl border-b-2 border-b-black p-2">
        <Link href={`${link.id}`} onClick={() => setToggle(false)}>
          {link.title}
        </Link>
      </li>
    );
  };

  return (
    <>
      <nav
        className={`${toggle || router.pathname != "/" ? "" : "header"} ${
          router.pathname === "/"
            ? "bg-none text-white"
            : "bg-primary text-black"
        } fixed flex justify-between px-6 py-3 items-center md:px-20 w-full z-20 transition-all font-lora text-black  ${hState}`}
      >
        <Link
          className="font-semibold text-3xl"
          href="/"
          onClick={() => setActive("")}
        >
          <Image
            src={
              hState === "up" || toggle || router.pathname != "/"
                ? "/logo.svg"
                : "/logo_white.svg"
            }
            width={50}
            height={50}
            priority
            style={{width: '50px', height: '50px'}}
            alt="logo"
          />
        </Link>
        <ul className="list-none gap-10 hidden lg:flex">
          {links.map((link, index) => (
            <Navlink key={index} link={link} />
          ))}
        </ul>
        <ul className="list-none gap-2 flex  order-last items-center">
          <li className="font-medium text-xl">
            <button
              onClick={() => setMenu(!menu)}
              className="hover:bg-darkgreen bg-primary rounded-full transition-all text-darkgreen  hover:text-white"
            >
              <div className="flex gap-3 items-center px-6 py-1 rounded-full">
                <BsFillCartFill />
                <div className=" inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-darkgreen  rounded-full -right-2">
                  {total_items}
                </div>
              </div>
            </button>
          </li>
          <li className="font-medium text-xl">
          {toggle ? (
          <button
            aria-label="close"
            className="lg:hidden text-md text-darkgreen"
            onClick={() => setToggle(false)}
          >
            <AiOutlineCloseCircle />
          </button>
        ) : (
          <button
            className="lg:hidden text-md"
            aria-label="menu"
            onClick={() => setToggle(true)}
          >
            <HiOutlineMenuAlt3/>
          </button>
        )}
          </li>
        </ul>

        
      </nav>

      <AnimatePresence>
        {toggle && (
          <motion.div
            key="menu"
            className="font-lora px-6 pt-20 fixed flex flex-col gap-10 items-stretch top-0 min-h-full w-full z-10 bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="list-none flex flex-col gap-10 self-stretch text-darkgreen">
              {links.map((link, index) => (
                <NavlinkMobile key={index} link={link} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
      {menu && <CartBox handleClick={setShowCart} key="cart" />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
