import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Info = () => {
  return (
    <div className="flex flex-col gap-5">
    <Marquee gradient={false} className="h-24">
        <p className='text-4xl md:text-6xl font-semibold'>&nbsp;Community focused roasters of exquisite coffee, making an impact at origin and at home.</p>
    </Marquee>
    <div className=" bg-darkgreen text-primary flex flex-col gap-10 lg:h-[700px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
        <div className="flex flex-col gap-10 self-end px-6 md:px-20  py-10">
          <h3 className="text-5xl lg:text-7xl font-normal">
            Coffee worthy of Your Admiration
          </h3>
          <p className="font-poppins">
            Unique small-lot coffees from our globe-spanning network of artisan
            producers, roasted to perfection and delivered to you each month.
          </p>
          <Link href="/contact" className="bg-white px-5 py-2 text-darkgreen rounded-full text-center  transition-all hover:-translate-y-1 hover:shadow-xl">
            Learn about our wholesale
          </Link>
        </div>
        <div className="justify-self-end w-full flex justify-end bg-red-400 relative h-[300px]">
          <Image
            className="object-cover"
            src="/info.avif"
            fill
            alt={"info"}
            sizes="(max-width: 768px) 50vw,
            (max-width: 1200px) 50vw,"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Info;
