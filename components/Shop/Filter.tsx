const Filter = ({filterChange, current}: {filterChange: any, current: string}) => {

    return (
        <div className="px-6 md:px-20 pt-10">
            <div className="grid grid-cols-2 w-full h-full items-center justify-center md:justify-start text-xl">
                <button className={`text-darkgreen border-2 border-darkgreen ${current === "grind" ? "bg-darkgreen text-white" : ""}`} onClick={() => filterChange("grind")}>Grind</button>
                <button className={`text-darkgreen border-2 border-darkgreen ${current === "iced-coffee" ? "bg-darkgreen text-white" : ""}`} onClick={() => filterChange("iced-coffee")}>Iced</button>
            </div>
        </div>
    )
}

export default Filter