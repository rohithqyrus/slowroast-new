import Link from "next/link";
import Card from "../Card";

const Cold = ({ products }: { products: any }) => {
  return (
    <div className="flex flex-col gap-10 px-6 md:px-20">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold">
          Get Energized, Cold and Refreshing
        </h2>
        <p className="text-lg font-poppins max-w-[500px]">
          Get some of our cold coffee and start your day the right way, or for
          intesive cram sessions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {products.map((product: any) => (
          <Link key={product.id} href={`/item/${product.id}`}>
            <Card
              key={product.id}
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

export default Cold;
