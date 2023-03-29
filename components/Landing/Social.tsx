import {AiFillInstagram, AiFillTwitterCircle,AiFillFacebook} from "react-icons/ai"
import {FaTiktok} from "react-icons/fa"

const Social = () => {
    return (
        <div className="px-6 md:px-20 bg-darkgreen  h-[500px] text-primary flex flex-col text-center items-center justify-center  py-10 gap-10">
            <div className="flex flex-col gap-5">
            <h4 className="text-5xl lg:text-8xl font-semibold">Let&lsquo;s be Friends</h4>
            <p className="font-poppins">We&lsquo;d love to stay connected and share ideas, art, delicious coffee and just good vibes.</p>
            </div>
            <div className="flex gap-5">
                <AiFillInstagram className="text-6xl"/>
                <AiFillTwitterCircle className="text-6xl" />
                <AiFillFacebook className="text-6xl" />
                <FaTiktok className="text-6xl" />
            </div>
        </div>
    )
}

export default Social