import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../context/cart";
import MenuContext from "../context/menu";
import { useState } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const [menu, setMenu] = useState(false);
  const value = { menu, setMenu };
  const { asPath } = useRouter();

  return (
    <>
      <ToastContainer/>
      <CartProvider>
        <MenuContext.Provider value={value}>
          <Navbar />
          <AnimatePresence mode="wait">
            <Layout keyMotion={asPath}>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
          <Footer />
        </MenuContext.Provider>
      </CartProvider>
    </>
  );
}
