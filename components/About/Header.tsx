import Image from "next/image";

const Header = () => {
  return (
    <div className="px-6 md:px-20 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-10 items-center text-darkgreen">
      <div className="col-span-2">
        <h1 className="text-4xl lg:text-6xl font-semibold max-w-[800px]">Roasting exquisite coffee while making an impact at origin and at home.</h1>
      </div>
      <div className="lg:row-span-1 xl:row-span-2  w-full bg-red-500">
        <Image
          src="/about1.avif"
          className="w-full"
          width={500}
          height={500}
          alt="about"
        />
      </div>
      <div className="col-span-2 lg:row-span-1  xl:row-span-2">
        <Image src="/about2.avif" 
          className="w-full"
          width={500}
          height={500}
          alt="about"/>
      </div>
      <div className="flex flex-col gap-5">
      <p className="font-poppins">
          We are a coffee company that aims to provide customers with
          high-quality, sustainably sourced coffee that is carefully roasted to
          perfection. We bring the joy and comfort
          of a great cup of coffee to people around the world while minimizing
          the environmental impact of the coffee industry. 
        </p>
        <p className="font-poppins">
        We work directly
          with farmers to ensure fair wages and environmentally responsible
          farming practices, and we roast our beans in small batches to
          maintain consistency and quality. We are committed to creating a
          positive impact on both the people who grow our coffee and the
          planet as a whole, and we strive to make each cup of our coffee a
          truly exceptional experience.
        </p>
      </div>
    </div>
  );
};

export default Header;
