import Image from "next/image"
import Link from "next/link"

const Wholesale = () => {
    return(
        <div className="px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center bg-darkgreen text-primary py-10 text-center lg:text-left">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                <h3 className="text-4xl lg:text-5xl xl:text-7xl font-semibold">LEARN ABOUT OUR WHOLESALE</h3>
                <p className="font-poppins">For Specialty and (non-Specialty) Shops, Stores, and Cafes</p>
                </div>
                <Link href="./contact">
                <button className="w-fit px-6 py-2 bg-red-800 text-primary rounded-full text-lg">Contact us for a wholesale</button>
                </Link>
            </div>
            <div className="flex justify-center">
                <Image  src="/wholesale.avif" alt="contact" width={800} height={800}/>
            </div>
        </div>
    )
}

export default Wholesale