import Image from "next/image";
import commerce from "../../lib/commerce";
import Tag from "@/components/Tag";
import striptags from "striptags";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdCoffeeMaker } from "react-icons/md";
import { ImTruck } from "react-icons/im";
import { useContext, useEffect, useState } from "react";
import { useCartDispatch } from "@/context/cart";
import MenuContext from "@/context/menu";
import {toast} from "react-toastify"
import {AiOutlineLoading3Quarters} from "react-icons/ai"

export async function getStaticProps({ params }: { params: any }) {
  const product = await commerce.products.retrieve(params.id);
  return {
    props: {
      product,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const Item = ({ product }: { product: any }) => {

  const { setCart } = useCartDispatch();
  const name = product.name.split(",");
  const description = striptags(product.description);
  const price = name[1].split("—");
  const inventory = product.inventory.available;
  const [order, setOrder] = useState(1);
  const [loading, setLoading] = useState(false);
  const {setMenu} = useContext(MenuContext)

  useEffect(() => {
    order > inventory && setOrder(inventory);
    order < 0 && setOrder(1);
  }, [order]);

  const addToCart = async () => {
    try{
    setLoading(true)
    await commerce.cart.add(product.id, order).then((cart:any) => setCart(cart));
    setOrder(1);
    setLoading(false)
    setMenu(true)
    }catch(err) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 min-h-screen">
      <div className="flex items-center justify-center bg-secondary">
        <Image
          src={product.image.url}
          width={550}
          height={550}
          alt={product.name}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col px-6 md:px-20 py-10 gap-10">
        <h1 className="text-5xl font-semibold">{name[0]}</h1>
        <div className="flex gap-5">
          {product.categories.map((tag: any, index: number) => (
            <Tag text={tag.name} key={index} />
          ))}
        </div>
        <p className="font-poppins">{description}</p>
        <ul className="font-poppins flex flex-col gap-5">
          <li>
            <div className="flex gap-4 items-center border-b-2 pb-2 border-darkgreen">
              <RiMoneyDollarCircleFill className="text-4xl" />
              <p>
                {price[1]}
                <br></br>
                <small>{price[0]}, VAT included</small>
              </p>
            </div>
          </li>
          <li className="flex gap-3 items-center border-b-2 pb-2 border-darkgreen">
            <div className="flex gap-4 items-center">
              <MdCoffeeMaker className="text-4xl" />
              <p>
                35 GRAM
                <br></br>
                <small>17-24 servings</small>
              </p>
            </div>
          </li>
          <li className="flex gap-3 items-center border-b-2 pb-2 border-darkgreen">
            <div className="flex gap-4 items-center">
              <ImTruck className="text-4xl" />
              <p>
                FREE SHIPPING
                <br></br>
                <small>Only in Myanmar, Yangon</small>
              </p>
            </div>
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-5">
          <input
            name="numbers"
            type="number"
            max={inventory}
            min={1}
            value={order}
            onChange={(e) => setOrder(+e.target.value)}
            className="p-5 rounded-lg border-2 border-darkgreen"
          />
          <button
            className="p-5 bg-darkgreen text-white rounded-xl disabled:opacity-50"
            onClick={addToCart}
            disabled={loading ? true : false}
          >
            {loading ? (<p className="flex w-full items-center gap-5 justify-center"><AiOutlineLoading3Quarters className="animate-spin"/>Please wait...</p>) : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Item;
