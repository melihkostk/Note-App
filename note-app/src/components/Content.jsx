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

import { Note } from "./Note.jsx"

import React from "react"

export function Content({ flexDir }) {

    const [isShown, setIsShown] = React.useState(false);

    function openNoteMenu() {
        setIsShown(true)
    }

    const [formatShown, setFormatShown] = React.useState(false)

    const [notes, setNotes] = React.useState([])
    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    const [isBold, setIsBold] = React.useState(false)
    const [isItalic, setIsItalic] = React.useState(false)
    const [hasUnderline, setHasUnderline] = React.useState(false)


    function addNote() {
        if (!title.trim() || !content.trim()) {
            setIsShown(false)
            return
        }
        else {
            const newNote = {
                title: title,
                content: content
            }

            setNotes([...notes, newNote])
            const updatedNotes = [...notes, newNote]
            localStorage.setItem("notes", JSON.stringify(updatedNotes))
            setTitle("")
            setContent("")
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
            {!isShown && <div onClick={openNoteMenu} className="border border-[#5f6368] placeholder-[#99999B] w-1/2 py-2.5 px-4 mt-8 rounded-md text-[#e8eaed] cursor-text flex items-center justify-between">
                Not alın...
                <div className="flex items-center">
                    <img className="mx-4" src={checkBox} alt="" />
                    <img className="mx-4" src={brushIcon} alt="" />
                    <img className="mx-4" src={imageIcon} alt="" />
                </div>
            </div>}
            {isShown && <div className="border border-[#5f6368] w-1/2 rounded-xl mt-8">
                <div className="flex items-center justify-between px-4 pt-4">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="placeholder-white font-semibold text-white placeholder:text-[20px] w-full focus:outline-none" type="text" placeholder="Başlık" name="baslık" id="baslık" />
                    <img className="hover:bg-[rgba(154,160,166,0.157)] rounded-full cursor-pointer" src={keepIcon} alt="" />
                </div>
                <div className="px-4 py-3">
                    <input value={content} onChange={(e) => setContent(e.target.value)} className={`${isBold ? "font-bold" : "font-normal"} ${isItalic ? "italic" : "not-italic"} ${hasUnderline ? "underline" : ""} placeholder-white text-white placeholder:text-[16px] w-full focus:outline-none`} type="text" placeholder="Not alın..." name="not" id="note" />
                </div>
                {formatShown && <div className="flex items-center px-0.5 shadow-[0_1px_3px_1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.3)] mx-2 w-max">
                    <img onClick={() => setIsBold(prev => !prev)} className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={boldIcon} alt="" />
                    <img onClick={() => setIsItalic(prev => !prev)} className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={italicIcon} alt="" />
                    <img onClick={() => setHasUnderline(prev => !prev)} className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={underlineIcon} alt="" />
                    <img
                        onClick={() => {
                            setIsBold(false);
                            setIsItalic(false);
                            setHasUnderline(false);
                        }
                        }
                        className="p-2 cursor-pointer hover:bg-[#282A2C] rounded-full" src={cleanIcon} alt=""
                    />
                </div>}
                <div className="flex items-center justify-between my-1">
                    <div className="flex items-center">
                        <img onClick={() => setFormatShown(prev => !prev)} className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={customIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={paletteIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={alertIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={personIcon} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={imageIcon} alt="" />
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
            <div className={`flex ${flexDir ? "flex-row" : "flex-col"} flex-wrap justify-start gap-3`}>
                {notes.map((n, index) => (
                    <Note key={index} title={n.title} note={n.content} />
                ))}
            </div>
        </div>
    )
}