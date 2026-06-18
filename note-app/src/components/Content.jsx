import keepIcon from "../assets/keep.png"
import imageIcon from "../assets/image.png"
import customIcon from "../assets/custom.png"
import darkCustom from "../assets/dark-custom.png"
import boldIcon from "../assets/bold.png"
import blackBold from "../assets/black-bold.png"
import italicIcon from "../assets/italic.png"
import blackItalic from "../assets/black-italic.png"
import underlineIcon from "../assets/underline.png"
import blackUnderline from "../assets/black-underline.png"
import cleanIcon from "../assets/format-clean.png"
import blackClean from "../assets/black-clean.png"
import h1 from "../assets/h1.png"
import blackH1 from "../assets/black-h1.png"
import blackH2 from "../assets/black-h2.png"
import h2 from "../assets/h2.png"
import normal from "../assets/normal.png"
import blackNormal from "../assets/black-normal.png"
import deleteIcon from "../assets/delete.png"
import lambIcon from "../assets/bulb.png"
import darkImage from "../assets/dark-image.png"

import { Note } from "./Note.jsx"

import React from "react"

export function Content({editedNotes,setEditedNotes,darkMode, flexDir,setArchivedNotes,searchInput,setNotes, notes ,img , setImg , setArchiveShown , setDeletedNotes }) {

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
            {!isShown && <div onClick={() => setIsShown(true)} className={`${darkMode ? "text-[#e8eaed] border border-[#5f6368]" :"text-[#202124] border border-gray-200"} w-1/2 py-2.5 px-4 mt-8 rounded-md cursor-text shadow-[0_1px_3px_rgba(0,0,0,0.12)]`}>
                Not alın...
            </div>}
            {isShown && <div className={`border ${darkMode ? "border-[#5f6368]" : "border-[#e0e0e0]"} border-[#5f6368] shadow-[0_4px_12px_rgba(0,0,0,0.25)] w-1/2 rounded-xl mt-8`}>
                {img && <div className="flex flex-col items-center justify-center">
                    <img className="w-full" src={img} alt="" />
                    <img onClick={()=>setImg("")} className="self-end px-4 cursor-pointer" src={deleteIcon} alt="" />
                </div>}
                <div className="flex items-center justify-between px-4 pt-4">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className={`${darkMode ? "placeholder-white text-white" : "placeholder-[#202124] text-[#202124]"} font-semibold placeholder:text-[20px] w-full focus:outline-none`} type="text" placeholder="Başlık" name="baslık" id="baslık" />
                    <img className="hover:bg-[rgba(154,160,166,0.157)] rounded-full cursor-pointer" src={keepIcon} alt="" />
                </div>
                <div className="px-4 py-3">
                    <input value={content} onChange={(e) => setContent(e.target.value)} className={`${isBold ? "font-bold" : "font-normal"} ${isItalic ? "italic" : "not-italic"} ${hasUnderline ? "underline" : ""} ${isH1 ? "text-xl" : ""} ${isH2 ? "text-lg" : ""} ${darkMode ? "placeholder-white text-white" : "placeholder-[#202124] text-[#202124]"}  placeholder:text-[16px] w-full focus:outline-none`} type="text" placeholder="Not alın..." name="not" id="note" />
                </div>
                {formatShown && <div className="flex items-center px-0.5 shadow-[0_1px_3px_1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.3)] mx-2 w-max">
                    <div className="flex border-r border-[#5f6368]">
                        <div>
                            <img onClick={() => setIsH1(prev => !prev)} className={`p-2 cursor-pointer ${darkMode ? "hover:bg-[#282A2C]" : "hover:bg-[#5f636828]"} rounded-full`} src={darkMode ? h1 : blackH1} alt="" />
                        </div>
                        <div>
                            <img onClick={() => setIsH2(prev => !prev)} className={`p-2 cursor-pointer ${darkMode ? "hover:bg-[#282A2C]" : "hover:bg-[#5f636828]"} rounded-full`} src={darkMode ? h2 : blackH2} alt="" />
                        </div>
                        <div>
                            <img
                                onClick={() => {
                                    setIsH1(false);
                                    setIsH2(false);
                                }}
                                className={`p-2 cursor-pointer ${darkMode ? "hover:bg-[#282A2C]" : "hover:bg-[#5f636828]"} rounded-full`} src={darkMode ? normal : blackNormal} alt=""
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <img onClick={() => setIsBold(prev => !prev)} className={`p-2 cursor-pointer ${darkMode ? "hover:bg-[#282A2C]" : "hover:bg-[#5f636828]"} rounded-full`} src={darkMode ? boldIcon : blackBold} alt="" />
                        </div>
                        <div>
                            <img onClick={() => setIsItalic(prev => !prev)} className={`p-2 cursor-pointer ${darkMode ? "hover:bg-[#282A2C]" : "hover:bg-[#5f636828]"} rounded-full`} src={darkMode ? italicIcon : blackItalic} alt="" />
                        </div>
                        <div>
                            <img onClick={() => setHasUnderline(prev => !prev)} className={`p-2 cursor-pointer ${darkMode ? "hover:bg-[#282A2C]" : "hover:bg-[#5f636828]"} rounded-full`} src={darkMode ? underlineIcon : blackUnderline} alt="" />
                        </div>
                        <div>
                            <img
                                onClick={() => {
                                    setIsBold(false);
                                    setIsItalic(false);
                                    setHasUnderline(false);
                                }
                                }
                                className={`p-2 cursor-pointer ${darkMode ? "hover:bg-[#282A2C]" : "hover:bg-[#5f636828]"} rounded-full`} src={darkMode ? cleanIcon : blackClean} alt=""
                            />
                        </div>
                    </div>
                </div>}
                <div className="flex items-center justify-between my-1">
                    <div className="flex items-center">
                        <img onClick={() => setFormatShown(prev => !prev)} className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={darkMode ? customIcon : darkCustom} alt="" title="Biçimlendirme seçenekleri" />
                        <label className="mx-2" htmlFor="fileInput">
                            <img className="h-5 w-5 cursor-pointer" src={darkMode ? imageIcon : darkImage} title="Resim ekle" />
                        </label>
                        <input
                            onChange={(e) => {
                                const file = e.target.files[0];
                                setImg(URL.createObjectURL(file));
                            }}
                            id="fileInput" type="file"
                            className="hidden"
                        />
                    </div>
                    <div onClick={addNote} className={`px-6 py-2 mr-3.75 ${darkMode ? "text-white" : "text-[#202124]"} cursor-pointer hover:font-semibold`}>
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
                        editedNotes={editedNotes}
                        setEditedNotes={setEditedNotes}
                    />
                ))}
            </div>}
        </div>
    )
}

