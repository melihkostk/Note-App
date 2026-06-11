import paletteIcon from "../assets/palette.png"
import alertIcon from "../assets/alert.png"
import personIcon from "../assets/person.png"
import imageIcon from "../assets/image.png"
import archIcon from "../assets/arch.png"
import moreIcon from "../assets/more.png"
import checkIcon from "../assets/check.png"
import colorIcon from "../assets/reset-color.png"
import undoIcon from "../assets/undo.png"
import redoIcon from "../assets/redo.png"
import customIcon from "../assets/custom.png"
import React from "react"

export function Note(props) {

    const [isShown, setIsShown] = React.useState(false)
    const [colorShown, setColorShown] = React.useState(false)
    const [moreShown, setMoreShown] = React.useState(false)
    const [noteColor, setNoteColor] = React.useState("")
    const [editShown, setEditShown] = React.useState(false)

    function deleteNote(id) {
        const saved = JSON.parse(localStorage.getItem("notes")) || [];
        const deleted = saved.filter(note => note.id !== id);
        localStorage.setItem("notes", JSON.stringify(deleted));
        props.setNotes(deleted);
    }

    return (

        <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="border border-[#5f6368] text-white rounded-xl max-w-60 min-w-60 relative" style={{ backgroundColor: noteColor }}>
            <div className={`w-5 h-5 absolute -top-2.5 -left-2 ${isShown ? "visible" : "invisible"}`}>
                <img className="bg-white rounded-full" src={checkIcon} alt="" />
            </div>
            <div onClick={(e) => e.stopPropagation()} className={`${editShown ? "flex" : "hidden"} flex-col fixed left-[30%] top-10 border rounded-lg bg-[#202124] z-20 border-[#5f6368] w-150`}>
                <div className="pt-4 px-4 text-xl font-semibold w-full">
                    <input className="focus:outline-none w-full" type="text" />
                </div>
                <div className="px-4 py-3 text-wrap">
                    <div className={`wrap-break-word w-full ${props.isBold ? "font-bold" : ""} ${props.isItalic ? "italic" : ""} ${props.hasUnderline ? "underline" : ""} ${props.isH1 ? "text-xl" : ""} ${props.isH2 ? "text-lg" : ""} `}>
                        <input className="focus:outline-none w-full" type="text" />
                    </div>
                </div>
                <div className="self-end px-2.5 text-[12px] font-semibold text-[#FFFFFFCC]">
                    Son Düzenleme: 12:25
                </div>
                <div className="flex items-center justify-between my-1">
                    <div className="flex items-center">
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={customIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={paletteIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={alertIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={personIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={imageIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={archIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={moreIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={undoIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={redoIcon} alt="" />
                    </div>
                    <div onClick={()=>setEditShown(false)} className="px-6 py-2 mr-3.75 text-white cursor-pointer hover:font-semibold">
                        Kapat
                    </div>
                </div>
            </div>
            {props.img && <div>
                <img src={props.img} alt="preview" />
            </div>}
            <div onClick={()=>setEditShown(prev => !prev)} className="pt-4 px-4 text-xl font-semibold cursor-pointer">
                <h1 className="wrap-break-word">
                    {props.title}
                </h1>
            </div>
            <div className="px-4 py-3 text-wrap">
                <p className={`wrap-break-word w-full ${props.isBold ? "font-bold" : ""} ${props.isItalic ? "italic" : ""} ${props.hasUnderline ? "underline" : ""} ${props.isH1 ? "text-xl" : ""} ${props.isH2 ? "text-lg" : ""} `}>
                    {props.note}
                </p>
            </div>
            {colorShown && <div className="flex items-center flex-wrap absolute -bottom-15 -left-1/2 w-max bg-[#202124] rounded-[10px] shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] px-2.25 py-2 z-10 ">
                <div className="cursor-pointer" onClick={() => setNoteColor("")}>
                    <img src={colorIcon} alt="" />
                </div>
                <div onClick={() => setNoteColor("#77172e")} className="bg-[#77172e] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#692b17")} className="bg-[#692b17] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#7c4a03")} className="bg-[#7c4a03] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#264d3b")} className="bg-[#264d3b] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#0c625d")} className="bg-[#0c625d] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#256377")} className="bg-[#256377] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#284255")} className="bg-[#284255] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#472e5b")} className="bg-[#472e5b] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#6c394f")} className="bg-[#6c394f] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#4b443a")} className="bg-[#4b443a] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
                <div onClick={() => setNoteColor("#232427")} className="bg-[#232427] w-8 h-8 rounded-full hover:border-2 border-white cursor-pointer m-0.5"></div>
            </div>}
            {moreShown && <div className="flex flex-col absolute top-full left-48 bg-[#202124] shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] text-sm py-2 w-[228.8px] z-10">
                <div onClick={() => deleteNote(props.id)} className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)]">Notu sil</div>
                <div className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)]">Etiket ekle</div>
            </div>}
            <div className={`flex ${isShown ? "visible" : "invisible"} items-start justify-between px-4 py-3 `}>
                <div>
                    <img 
                    onClick={() => setColorShown(prev => !prev)} 
                    
                    className="h-5 w-5 cursor-pointer" src={paletteIcon} alt="" />
                </div>
                <div>
                    <img className="h-5 w-5 cursor-pointer" src={alertIcon} alt="" />
                </div>
                <div>
                    <img className="h-5 w-5 cursor-pointer" src={personIcon} alt="" />
                </div>
                <div>
                    <label htmlFor="fileInput">
                        <img className="h-5 w-5 cursor-pointer" src={imageIcon} />
                    </label>
                    <input id="fileInput" type="file" className="hidden" />
                </div>
                <div>
                    <img className="h-5 w-5 cursor-pointer" src={archIcon} alt="" />
                </div>
                <div>
                    <img onClick={() => setMoreShown(prev => !prev)} className="h-5 w-5 cursor-pointer" src={moreIcon} alt="" />
                </div>
            </div>
        </div>

    )
}