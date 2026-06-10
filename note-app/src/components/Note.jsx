import paletteIcon from "../assets/palette.png"
import alertIcon from "../assets/alert.png"
import personIcon from "../assets/person.png"
import imageIcon from "../assets/image.png"
import archIcon from "../assets/arch.png"
import moreIcon from "../assets/more.png"
import checkIcon from "../assets/check.png"
import colorIcon from "../assets/reset-color.png"
import React from "react"

export function Note(props) {

    const [isShown, setIsShown] = React.useState(false)
    const [colorShown,setColorShown] = React.useState(false)
    const [moreShown,setMoreShown] = React.useState(false)
    const [noteColor,setNoteColor] = React.useState("")

    return (
        <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="border border-[#5f6368] text-white rounded-xl mt-6 max-w-60 min-w-60 relative cursor-pointer" style={{ backgroundColor: noteColor }}>
            <div className={`w-5 h-5 absolute -top-2.5 -left-2 ${isShown ? "visible" : "invisible"}`}>
                <img className="bg-white rounded-full" src={checkIcon} alt="" />
            </div>
            <div className="pt-4 px-4 text-xl font-semibold">
                <h1 className="wrap-break-word">
                    {props.title}
                </h1>
            </div>
            <div className="px-4 py-3 text-wrap">
                <p className="wrap-break-word w-full">
                    {props.note}
                </p>
            </div>
            {colorShown && <div className="flex items-center flex-wrap absolute -bottom-15 -left-1/2 w-max bg-[#202124] rounded-[10px] shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] px-2.25 py-2 z-10 ">
                <div className="cursor-pointer" onClick={()=>setNoteColor("")}>
                    <img src={colorIcon} alt="" />
                </div>
                <div onClick={()=>setNoteColor("#77172e")} className="bg-[#77172e] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#692b17")} className="bg-[#692b17] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#7c4a03")} className="bg-[#7c4a03] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#264d3b")} className="bg-[#264d3b] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#0c625d")} className="bg-[#0c625d] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#256377")} className="bg-[#256377] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#284255")} className="bg-[#284255] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#472e5b")} className="bg-[#472e5b] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#6c394f")} className="bg-[#6c394f] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#4b443a")} className="bg-[#4b443a] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={()=>setNoteColor("#232427")} className="bg-[#232427] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
            </div>}
            {moreShown && <div className="flex flex-col absolute top-full left-48 bg-[#202124] shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] text-sm py-2 w-[228.8px]">
                <div className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)]">Notu sil</div>
                <div className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)]">Etiket ekle</div>
                <div className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)]">Çizim ekle</div>
                <div className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)]">Kopya oluştur</div>
                <div className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)]">Onay kutularını göster</div>
                <div className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)]">Google Dokümanlar'a kopyala</div>
                <div className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)]">Sürüm geçmişi</div>
            </div>}
            <div className={`flex ${isShown ? "visible" : "invisible"} items-start justify-between px-4 py-3 `}>
                <div>
                    <img onClick={()=>setColorShown(prev=>!prev)} className="h-5 w-5 cursor-pointer" src={paletteIcon} alt="" />
                </div>
                <div>
                    <img className="h-5 w-5 cursor-pointer" src={alertIcon} alt="" />
                </div>
                <div>
                    <img className="h-5 w-5 cursor-pointer" src={personIcon} alt="" />
                </div>
                <div>
                    <img className="h-5 w-5 cursor-pointer" src={imageIcon} alt="" />
                </div>
                <div>
                    <img className="h-5 w-5 cursor-pointer" src={archIcon} alt="" />
                </div>
                <div>
                    <img onClick={()=>setMoreShown(prev => !prev)} className="h-5 w-5 cursor-pointer" src={moreIcon} alt="" />
                </div>
            </div>
        </div>
    )
}