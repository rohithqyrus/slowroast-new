import Image from "next/image";

const CheckoutBox = ({ item }: { item: any }) => {
  const split = item.name.split(",");
  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <div className="w-[50%] relative flex items-center justify-center">
          <Image
            src={item.image.url}
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 80vw,
              "
            alt={item.name}
            className="object-contain rounded-xl"
          />
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <p className="text-md lg:text-lg font-semibold">{split[0]}</p>
            <p className="text-sm bg-secondary text-darkgreen rounded-xl py-2  self-start px-3">
              Quantity: {item.quantity}
            </p>
          </div>
        </div>
      </div>
      <p>${item.quantity * item.price.raw}</p>
    </div>
  );
};

export default CheckoutBox;
