import paletteIcon from "../assets/palette.png"
import alertIcon from "../assets/alert.png"
import personIcon from "../assets/person.png"
import imageIcon from "../assets/image.png"
import archIcon from "../assets/arch.png"
import moreIcon from "../assets/more.png"
import checkIcon from "../assets/check.png"
import React from "react"

export function Note(props){

    const [isShown,setIsShown] = React.useState(false)

    return(
        <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="border border-[#5f6368] text-white rounded-xl mt-6 max-w-60 min-w-60 relative">
            <div className={`w-5 h-5 absolute -top-2.5 -left-2 ${isShown ? "visible" : "invisible"}`}>
                <img className="bg-white rounded-full" src={checkIcon} alt="" />
            </div>
            <div className="pt-4 px-4 text-xl font-semibold">
                <h1 className="wrap-break-word cursor-text">
                    {props.title}
                </h1>
            </div>
            <div className="px-4 py-3 text-wrap">
                <p className="wrap-break-word w-full cursor-text">
                    {props.note}
                </p>
            </div>
            <div className={`flex ${isShown ? "visible" : "invisible"} items-start justify-between px-4 py-3 `}>
                <img className="h-5 w-5 cursor-pointer" src={paletteIcon} alt="" />
                <img className="h-5 w-5 cursor-pointer" src={alertIcon} alt="" />
                <img className="h-5 w-5 cursor-pointer" src={personIcon} alt="" />
                <img className="h-5 w-5 cursor-pointer" src={imageIcon} alt="" />
                <img className="h-5 w-5 cursor-pointer" src={archIcon} alt="" />
                <img className="h-5 w-5 cursor-pointer" src={moreIcon} alt="" />
            </div>
        </div>
    )
}