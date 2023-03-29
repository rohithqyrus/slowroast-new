import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-6 md:px-20 border-t-2 border-primary py-6 bg-darkgreen grid grid-cols-1 gap-5 items-center md:grid-cols-3 text-primary font-poppins text-center">
      
      <div className="flex flex-col items-center justify-items-center">
        <Image src="/logo_white.svg" width={50} height={50} alt="logo" />
      </div>
      <div>slowroast Cafe 823 E Main St. Floyd, VA 24091</div>
      <div>© slowroast - 2023</div>
    </div>
  );
};

export default Footer;
