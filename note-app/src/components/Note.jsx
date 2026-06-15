import paletteIcon from "../assets/palette.png"
import alertIcon from "../assets/alert.png"
import imageIcon from "../assets/image.png"
import archIcon from "../assets/arch.png"
import moreIcon from "../assets/more.png"
import checkIcon from "../assets/check.png"
import colorIcon from "../assets/reset-color.png"
import undoIcon from "../assets/undo.png"
import redoIcon from "../assets/redo.png"
import customIcon from "../assets/custom.png"
import closeIcon from "../assets/close.png"
import deleteForever from "../assets/delete-forever.png"
import restoreIcon from "../assets/restore.png"
import React from "react"

export function Note(props) {

    const [isShown, setIsShown] = React.useState(false)
    const [colorShown, setColorShown] = React.useState(false)
    const [moreShown, setMoreShown] = React.useState(false)
    const [noteColor, setNoteColor] = React.useState("")
    const [editShown, setEditShown] = React.useState(false)
    const [remainderMenuShown, setRemainderMenuShown] = React.useState(false)
    const [remainder, setRemainder] = React.useState(null)
    const [deleteShown, setDeleteShown] = React.useState(false)
    const [tagMenuShown, setTagMenuShown] = React.useState(false)
    const [tag, setTag] = React.useState("")

    function deleteNote(id) {
        const saved = JSON.parse(localStorage.getItem("notes")) || [];
        const deletedNote = saved.find(note => note.id === id);
        const remaining = saved.filter(note => note.id !== id);
        localStorage.setItem("notes", JSON.stringify(remaining));
        const deleted = JSON.parse(localStorage.getItem("deletedNotes")) || [];
        props.setNotes(remaining);
        props.setDeletedNotes([...deleted, deletedNote]);
        localStorage.setItem("deletedNotes", JSON.stringify([...deleted, deletedNote]));
    }

    function archiveNotes(id){
        const saved = JSON.parse(localStorage.getItem("notes")) || [];
        const archivedNote = saved.find(note => note.id === id);
        const remaining = saved.filter(note => note.id !== id);
        const archived = JSON.parse(localStorage.getItem("archivedNotes")) || [];
        localStorage.setItem("notes", JSON.stringify(remaining));
        localStorage.setItem("archivedNotes", JSON.stringify([...archived, archivedNote]));
        props.setNotes(remaining);
        props.setArchivedNotes([...archived, archivedNote]);
    }

    return (

        <div 
        onMouseEnter={() => setIsShown(true)} 
        onMouseLeave={() => setIsShown(false)} 
        className="border border-[#5f6368] text-white rounded-xl max-w-60 min-w-60 relative max-h-max" style={{ backgroundColor: noteColor }}>
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
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={imageIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={archIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={moreIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={undoIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={redoIcon} alt="" />
                    </div>
                    <div onClick={() => setEditShown(false)} className="px-6 py-2 mr-3.75 text-white cursor-pointer hover:font-semibold">
                        Kapat
                    </div>
                </div>
            </div>
            {props.img && <div>
                <img src={props.img} alt="preview" />
            </div>}
            <div onClick={() => setEditShown(prev => !prev)} className="pt-4 px-4 text-xl font-semibold cursor-pointer">
                <h1 className="wrap-break-word">
                    {props.title}
                </h1>
            </div>
            <div className="px-4 py-3 text-wrap">
                <p className={`wrap-break-word w-full ${props.isBold ? "font-bold" : ""} ${props.isItalic ? "italic" : ""} ${props.hasUnderline ? "underline" : ""} ${props.isH1 ? "text-xl" : ""} ${props.isH2 ? "text-lg" : ""} `}>
                    {props.note}
                </p>
            </div>
            {<div className="flex flex-wrap">
                {remainder && <div className="py-1.25 px-2.5">
                    <div onMouseEnter={() => setDeleteShown(true)} onMouseLeave={() => setDeleteShown(false)} className="flex gap-1 items-center border-2 border-[#5f6368] p-1.25 w-max text-[11px] font-semibold rounded-full relative pr-6">
                        {remainder}
                        {deleteShown && <img onClick={() => setRemainder(null)} className="w-4.5 h-4.5 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] rounded-full absolute right-0" src={closeIcon} alt="" />}
                    </div>
                </div>}
                {tag && <div className="py-1.25 px-2.5">
                    <div onMouseEnter={() => setDeleteShown(true)} onMouseLeave={() => setDeleteShown(false)} className="flex gap-1 items-center border-2 border-[#5f6368] p-1.25 w-max text-[11px] font-semibold rounded-full relative pr-6">
                        {tag}
                        {deleteShown && <img onClick={() => setTag(null)} className="w-4.5 h-4.5 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] rounded-full absolute right-0" src={closeIcon} alt="" />}
                    </div>
                </div>}
            </div>}
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
                <div onClick={() => deleteNote(props.id)} className="py-1.25 pl-4.25 pr-2.5 font-semibold cursor-pointer hover:bg-[rgba(255,255,255,0.3)]">Notu sil</div>
                <div
                    onClick={() => {
                        setTagMenuShown(prev => !prev);
                        setMoreShown(prev => !prev);
                    }
                    }
                    className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)] cursor-pointer">Etiket ekle</div>
            </div>}
            {remainderMenuShown && <div className="flex flex-col -bottom-60 absolute z-50 bg-[#202124] shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)]">
                <div className="p-3.75">
                    <h1 className="text-[14px] text-[#E8EAED] font-semibold">Daha sonra anımsat</h1>
                    <p className="text-[13px] text-[#E8EAED] font-semibold">Hatırlatıcılarınız Google Görevler'e kaydedilir</p>
                </div>
                <div onClick={(e) => setRemainder(e.target.textContent)} className="flex justify-between px-3.75 py-2.5 text-[13px] cursor-pointer hover:bg-[#282A2C]">
                    <div className="w-full flex justify-between">Bugün daha sonra <span>18:00</span></div>
                </div>
                <div onClick={(e) => setRemainder(e.target.textContent)} className="flex justify-between px-3.75 py-2.5 text-[13px] cursor-pointer hover:bg-[#282A2C]">
                    <div className="flex justify-between w-full">Yarın <span>08.00</span></div>
                </div>
                <div onClick={(e) => setRemainder(e.target.textContent)} className="px-3.75 py-2.5 text-[13px] cursor-pointer hover:bg-[#282A2C]">
                    <div className="flex justify-between">Sonraki hafta <span>Pzt, 08:00</span></div>
                </div>
                <div onClick={(e) => setRemainder(e.target.textContent)} className="flex justify-between px-3.75 py-2.5 text-[13px] cursor-pointer hover:bg-[#282A2C]">
                    <p>Tarih ve saat seç</p>
                </div>
            </div>}
            {tagMenuShown && <div className="bg-[#2d2e30] absolute z-50 -right-30 bottom-8">
                <div className="border-b border-[#5f6368] py-2.75">
                    <div className="text-[14px] px-3">
                        Note etiket ekleyin
                    </div>
                    <div className="py-2 px-3">
                        <input onChange={(e) => setTag(e.target.value)} className="text-[13px] focus:outline-0" type="text" placeholder="Etiket adı girin" />
                    </div>
                </div>
                <div onClick={() => {
                    setTag(tag)
                    setTagMenuShown(prev => !prev)
                }
                } 
                    className="text-[13px] pt-1.25 pb-0.75 px-2.5 font-semibold cursor-pointer">
                    {tag && `${tag} etiketini oluşturun`}
                </div>
            </div>}
            {!props.trashPage && <div className={`flex ${isShown ? "visible" : "invisible"} items-start justify-between px-4 py-3 `}>
                <div>
                    <img
                        onClick={() => setColorShown(prev => !prev)}
                        className="h-5 w-5 cursor-pointer" src={paletteIcon} alt=""
                    />
                </div>
                <div>
                    <img onClick={() => setRemainderMenuShown(prev => !prev)} className="h-5 w-5 cursor-pointer" src={alertIcon} alt="" />
                </div>
                <div>
                    <label htmlFor="fileInput">
                        <img className="h-5 w-5 cursor-pointer" src={imageIcon} />
                    </label>
                    <input id="fileInput" type="file" className="hidden" />
                </div>
                <div>
                    <img 
                    onClick={()=>{
                        props.setArchiveShown(prev=>!prev)
                        archiveNotes(props.id)
                    
                    }
                    } 
                    className="h-5 w-5 cursor-pointer" src={archIcon} alt="" 
                    />
                </div>
                <div>
                    <img onClick={() => setMoreShown(prev => !prev)} className="h-5 w-5 cursor-pointer" src={moreIcon} alt="" />
                </div>
            </div>}
            {props.trashPage && <div className={`flex ${isShown ? "visible" : "invisible"} items-start px-4 py-3 `}>
                <div className="hover:bg-[#282A2C] flex items-center justify-center rounded-full">
                    <img className="pr-2 cursor-pointer" src={deleteForever} alt="" />
                </div>
                <div className="hover:bg-[#282A2C] flex items-center justify-center rounded-full">
                    <img className="pl-2 cursor-pointer" src={restoreIcon} alt="" />
                </div>
            </div>}
        </div>

    )
}