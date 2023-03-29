import Image from "next/image"
import Tag from "./Tag"
import { motion } from "framer-motion"



const Card = ({image, title, tags}: {image: string, title: string, tags: any}) => {
    const split = title.split(",")
    return (
        <motion.div className="flex flex-col gap-5 rounded-xl items-center p-6 bg-secondary text-center text-lg text-darkgreen hover:-translate-y-2 hover:drop-shadow-xl transition-all" initial={{opacity: 0}} animate={{opacity: 1}}>
            <Image src={image} height={500} width={500} alt="coffee bag" className="rounded-xl"/>
            <div>
            <p>{split[0]}</p>
            <p>{split[1]}</p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
                {tags.map((tag: any, index: number) => (
                    <Tag text={tag.name} key={index} />
                ))}
            </div>
        </motion.div>
    )
}

export default Card