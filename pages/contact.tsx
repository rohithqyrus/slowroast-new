import Consult from "@/components/Contact/Consult"
import SendInfo from "@/components/Contact/SendInfo"


const Contact = () => {
    return (
        <div className="flex flex-col gap-10 pb-10">
            <SendInfo />
            <Consult />
        </div>
    )
}

export default Contact