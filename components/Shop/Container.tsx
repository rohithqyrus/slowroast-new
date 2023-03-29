import Link from "next/link";
import Card from "../Card";

const Container = ({ products }: { products: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-6 md:px-20">
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
  );
};

export default Container;
