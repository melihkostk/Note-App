import keepIcon from "../assets/keep.png"
import paletteIcon from "../assets/palette.png"
import alertIcon from "../assets/alert.png"
import personIcon from "../assets/person.png"
import imageIcon from "../assets/image.png"
import archIcon from "../assets/arch.png"
import moreIcon from "../assets/more.png"
import undoIcon from "../assets/undo.png"
import redoIcon from "../assets/redo.png"
import customIcon from "../assets/custom.png"
import checkBox from "../assets/check-box.png"
import brushIcon from "../assets/brush.png"
import boldIcon from "../assets/bold.png"
import italicIcon from "../assets/italic.png"
import underlineIcon from "../assets/underline.png"
import cleanIcon from "../assets/format-clean.png"
import h1 from "../assets/h1.png"
import h2 from "../assets/h2.png"
import normal from "../assets/normal.png"
import deleteIcon from "../assets/delete.png"
import lambIcon from "../assets/bulb.png"

import { Note } from "./Note.jsx"

import React from "react"

export function Content({darkMode, flexDir,setArchivedNotes,searchInput,setNotes, notes ,img , setImg , setArchiveShown , setDeletedNotes }) {

    const [isShown, setIsShown] = React.useState(false);
    const [formatShown, setFormatShown] = React.useState(false)
    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    const [isBold, setIsBold] = React.useState(false)
    const [isItalic, setIsItalic] = React.useState(false)
    const [hasUnderline, setHasUnderline] = React.useState(false)
    const [isH1, setIsH1] = React.useState(false)
    const [isH2, setIsH2] = React.useState(false)

    function addNote() {
        if (!title.trim() || !content.trim()) {
            setIsShown(false)
            return
        }
        else {
            const newNote = {
                id: crypto.randomUUID(),
                img: img,
                title: title,
                content: content,
                isBold: isBold,
                isItalic: isItalic,
                hasUnderline: hasUnderline,
                isH1: isH1,
                isH2: isH2,
            }

            setNotes([...notes, newNote])
            const updatedNotes = [...notes, newNote]
            localStorage.setItem("notes", JSON.stringify(updatedNotes))
            setTitle("")
            setContent("")
            setImg("")
            setIsShown(false)
        }

    }

    React.useEffect(() => {
        const saved = localStorage.getItem("notes")

        if (saved) {
            setNotes(JSON.parse(saved))
        }
    }, [])

    return (
        <div className="flex flex-col items-center w-full">
            {!isShown && <div onClick={() => setIsShown(true)} className="border border-[#5f6368] placeholder-[#99999B] w-1/2 py-2.5 px-4 mt-8 rounded-md text-[#e8eaed] cursor-text flex items-center justify-between">
                Not alın...
                <div className="flex items-center">
                    <img className="mx-4" src={checkBox} alt="" />
                    <img className="mx-4" src={brushIcon} alt="" />
                    <img className="mx-4" src={imageIcon} alt="" />
                </div>
            </div>}
            {isShown && <div className="border border-[#5f6368] w-1/2 rounded-xl mt-8">
                {img && <div className="flex flex-col items-center justify-center">
                    <img className="w-full]" src={img} alt="" />
                    <img onClick={()=>setImg("")} className="self-end px-4 cursor-pointer" src={deleteIcon} alt="" />
                </div>}
                <div className="flex items-center justify-between px-4 pt-4">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="placeholder-white font-semibold text-white placeholder:text-[20px] w-full focus:outline-none" type="text" placeholder="Başlık" name="baslık" id="baslık" />
                    <img className="hover:bg-[rgba(154,160,166,0.157)] rounded-full cursor-pointer" src={keepIcon} alt="" />
                </div>
                <div className="px-4 py-3">
                    <input value={content} onChange={(e) => setContent(e.target.value)} className={`${isBold ? "font-bold" : "font-normal"} ${isItalic ? "italic" : "not-italic"} ${hasUnderline ? "underline" : ""} ${isH1 ? "text-xl" : ""} ${isH2 ? "text-lg" : ""} placeholder-white text-white placeholder:text-[16px] w-full focus:outline-none`} type="text" placeholder="Not alın..." name="not" id="note" />
                </div>
                {formatShown && <div className="flex items-center px-0.5 shadow-[0_1px_3px_1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.3)] mx-2 w-max">
                    <div className="flex border-r border-[#5f6368]">
                        <div>
                            <img onClick={() => setIsH1(prev => !prev)} className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={h1} alt="" />
                        </div>
                        <div>
                            <img onClick={() => setIsH2(prev => !prev)} className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={h2} alt="" />
                        </div>
                        <div>
                            <img
                                onClick={() => {
                                    setIsH1(false);
                                    setIsH2(false);
                                }}
                                className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={normal} alt=""
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <img onClick={() => setIsBold(prev => !prev)} className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={boldIcon} alt="" />
                        </div>
                        <div>
                            <img onClick={() => setIsItalic(prev => !prev)} className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={italicIcon} alt="" />
                        </div>
                        <div>
                            <img onClick={() => setHasUnderline(prev => !prev)} className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={underlineIcon} alt="" />
                        </div>
                        <div>
                            <img
                                onClick={() => {
                                    setIsBold(false);
                                    setIsItalic(false);
                                    setHasUnderline(false);
                                }
                                }
                                className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={cleanIcon} alt=""
                            />
                        </div>
                    </div>
                </div>}
                <div className="flex items-center justify-between my-1">
                    <div className="flex items-center">
                        <img onClick={() => setFormatShown(prev => !prev)} className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={customIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={paletteIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={alertIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={personIcon} alt="" />
                        <label className="mx-2" htmlFor="fileInput">
                            <img className="h-5 w-5 cursor-pointer" src={imageIcon} />
                        </label>
                        <input
                            onChange={(e) => {
                                const file = e.target.files[0];
                                setImg(URL.createObjectURL(file));
                            }}
                            id="fileInput" type="file"
                            className="hidden"
                        />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={archIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={moreIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={undoIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={redoIcon} alt="" />
                    </div>
                    <div onClick={addNote} className="px-6 py-2 mr-3.75 text-white cursor-pointer hover:font-semibold">
                        Kapat
                    </div>
                </div>
            </div>}
            {notes && notes.length === 0 && <div className="flex flex-col items-center justify-center mt-[20vh]">
                <img className="w-30 h-30 m-5" src={lambIcon} alt="" />
                <div className="text-[#9AA0A6] text-[22px]">Eklediğiniz notlar burada görünür</div>
            </div>}
            {notes && notes.length > 0 && <div className={`flex ${flexDir ? "flex-row" : "flex-col"} flex-wrap justify-start gap-3 mt-6 max-w-260`}>
                {notes.filter((item) => {return searchInput.toLowerCase() === "" ? item:item.content.toLowerCase().includes(searchInput)}).map((n) => (
                    <Note
                        key={n.id}
                        id={n.id}
                        title={n.title}
                        note={n.content}
                        img={n.img}
                        isBold={n.isBold}
                        isItalic={n.isItalic}
                        hasUnderline={n.hasUnderline}
                        isH1={n.isH1}
                        isH2={n.isH2}
                        setContent={setContent}
                        setTitle={setTitle}
                        setNotes={setNotes}
                        setArchiveShown={setArchiveShown}
                        setArchivedNotes={setArchivedNotes}
                        setDeletedNotes={setDeletedNotes}
                        darkMode={darkMode}
                    />
                ))}
            </div>}
        </div>
    )
}

