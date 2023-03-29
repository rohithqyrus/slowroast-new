import Link from "next/link";
import Card from "../Card";

const New = ({ products }: { products: any }) => {
  return (
    <div className="flex flex-col gap-5 px-6 md:px-20">
      <div>
        <h2 className="text-3xl font-semibold">New Arrivals</h2>
        <p className="text-lg font-poppins">
          Drink some of our new arrivals and find what you love.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((product: any) => (
          <Link key={product.id} href={`/item/${product.id}`}>
            <Card
              title={product.name}
              image={product.image.url}
              tags={product.categories}
            />
          </Link>
        ))}
      </div>
      <Link
        href="/shop"
        className="p-5 bg-red-800 rounded-xl text-primary text-center hover:bg-darkgreen transition-all hover:-translate-y-1 hover:shadow-xl"
      >
        Shop All Coffee
      </Link>
    </div>
  );
};

export default New;
