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
import deleteForeverIcon from "../assets/delete-forever.png"
import restoreIcon from "../assets/restore.png"
import whiteCheck from "../assets/white-check.png"
import darkPalette from "../assets/dark-palette.png"
import darkAlert from "../assets/dark-alert.png"
import darkImage from "../assets/dark-image.png"
import darkArch from "../assets/dark-arch.png"
import darkMore from "../assets/dark-more.png"
import darkColor from "../assets/dark-color.png"
import darkDelete from "../assets/dark-delete.png"
import darkRestore from "../assets/dark-restore.png"
import darkCustom from "../assets/dark-custom.png"
import darkClose from "../assets/dark-close.png"
import darkUndo from "../assets/dark-undo.png"
import darkRedo from "../assets/dark-redo.png"
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
    const [editedTitle, setEditedTitle] = React.useState("");
    const [editedNote, setEditedNote] = React.useState("");

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

    function archiveNotes(id) {
        const saved = JSON.parse(localStorage.getItem("notes")) || [];
        const archivedNote = saved.find(note => note.id === id);
        const remaining = saved.filter(note => note.id !== id);
        const archived = JSON.parse(localStorage.getItem("archivedNotes")) || [];
        localStorage.setItem("notes", JSON.stringify(remaining));
        localStorage.setItem("archivedNotes", JSON.stringify([...archived, archivedNote]));
        props.setNotes(remaining);
        props.setArchivedNotes([...archived, archivedNote]);
    }

    function deleteForever(id) {
        const deleted = JSON.parse(localStorage.getItem("deletedNotes")) || [];
        const updated = deleted.filter(note => note.id !== id);
        props.setDeletedNotes(updated);
        localStorage.setItem("deletedNotes", JSON.stringify(updated));
    }

    function restoreTrash(id) {
        const saved = JSON.parse(localStorage.getItem("notes")) || [];
        const deleted = JSON.parse(localStorage.getItem("deletedNotes")) || [];
        const restored = deleted.find(note => note.id === id);
        const remaining = deleted.filter(note => note.id !== id);
        if (!restored) return;
        const updatedNotes = [...saved, restored];
        props.setDeletedNotes(remaining);
        props.setNotes(updatedNotes);
        localStorage.setItem("deletedNotes", JSON.stringify(remaining));
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }

    function restoreArchive(id) {
        const archived = JSON.parse(localStorage.getItem("archivedNotes")) || [];
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const restoredNote = archived.find(note => note.id === id);
        const updatedArchived = archived.filter(note => note.id !== id);
        if (!restoredNote) return;
        const updatedNotes = [...notes, restoredNote];
        props.setArchivedNotes(updatedArchived);
        props.setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        localStorage.setItem("archivedNotes", JSON.stringify(updatedArchived));
    }

    function editNote(id) {
        const saved = JSON.parse(localStorage.getItem("notes")) || [];

        if (editedTitle && editedNote) {

            const updated = saved.map(note =>
                note.id === id ? { ...note, title: editedTitle, content: editedNote } : note
            );

            localStorage.setItem("notes", JSON.stringify(updated));
            props.setNotes(updated);
        }
        else {
            return
        }
    }

    function updateTime(id) {
        const saved = JSON.parse(localStorage.getItem("notes")) || [];

        const updated = saved.map(item =>
            item.id === id
                ? {
                    ...item,
                    createdAt: `${new Date().getHours()}:${new Date().getMinutes()}`
                }
                : item
        );

        localStorage.setItem("notes", JSON.stringify(updated));
    }

    return (

        <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={`${props.darkMode ? "border border-[#5f6368]" : "border border-[#e0e0e0] hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]"} text-white rounded-xl max-w-60 min-w-60 relative max-h-max`} style={{ backgroundColor: noteColor }}
        >
            <div className={`w-5 h-5 absolute -top-2.5 -left-2 ${isShown ? "visible" : "invisible"}`}>
                <img className={`${props.darkMode ? "bg-white" : "bg-black"} rounded-full`} src={props.darkMode ? checkIcon : whiteCheck} alt="" />
            </div>
            <div onClick={(e) => e.stopPropagation()} className={`${editShown ? "flex" : "hidden"} flex-col fixed left-[30%] top-10 border rounded-lg ${props.darkMode ? "bg-[#202124] border-[#5f6368]" : "bg-white border-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]"} z-20 w-150`}>
                <div className="pt-4 px-4 text-xl font-semibold w-full">
                    <input onChange={(e) => setEditedTitle(e.target.value)} className={`${props.darkMode ? "text-white" : "text-[#202124]"} focus:outline-none w-full`} type="text" value={editedTitle} />
                </div>
                <div className="px-4 py-3 text-wrap">
                    <div className={`wrap-break-word w-full ${props.isBold ? "font-bold" : ""} ${props.isItalic ? "italic" : ""} ${props.hasUnderline ? "underline" : ""} ${props.isH1 ? "text-xl" : ""} ${props.isH2 ? "text-lg" : ""} `}>
                        <input onChange={(e) => setEditedNote(e.target.value)} className={`${props.darkMode ? "text-white" : "text-[#202124]"} focus:outline-none w-full`} type="text" value={editedNote} />
                    </div>
                </div>
                <div className={`self-end px-2.5 text-[12px] font-semibold ${props.darkMode ? "text-[#FFFFFFCC]" : "text-[#000000CC]"}`}>
                    Son Düzenleme: {props.createdAt}
                </div>
                <div className="flex items-center justify-between my-1">
                    <div className="flex items-center">
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={props.darkMode ? customIcon : darkCustom} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={props.darkMode ? paletteIcon : darkPalette} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={props.darkMode ? alertIcon : darkAlert} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={props.darkMode ? imageIcon : darkImage} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={props.darkMode ? archIcon : darkArch} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={props.darkMode ? moreIcon : darkMore} alt="" />
                        <img
                            onClick={() => {
                                setEditedNote(prev => prev?.slice(0, -1) || "");
                            }}
                            className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={props.darkMode ? undoIcon : darkUndo} alt="" />
                        <img className="mx-2 hover:bg-[rgba(154,160,166,0.157)] p-1.5 rounded-full cursor-pointer" src={props.darkMode ? redoIcon : darkRedo} alt="" />
                    </div>
                    <div onClick={() => { setEditShown(false); editNote(props.id); updateTime(props.id) }} className={`px-6 py-2 mr-3.75 ${props.darkMode ? "text-[#FFFFFFCC]" : "text-[#000000de]"} text-[14px] font-semibold cursor-pointer `}>
                        Kapat
                    </div>
                </div>
            </div>
            {props.img && <div>
                <img src={props.img} alt="preview" />
            </div>}
            <div onClick={() => setEditShown(prev => !prev)} className="pt-4 px-4 text-xl font-semibold cursor-pointer">
                <h1 className={`${props.darkMode ? "text-white" : "text-[#202124]"} wrap-break-word`}>
                    {props.title}
                </h1>
            </div>
            <div className="px-4 py-3 text-wrap">
                <p className={`${props.darkMode ? "text-white" : "text-[#202124]"} wrap-break-word w-full ${props.isBold ? "font-bold" : ""} ${props.isItalic ? "italic" : ""} ${props.hasUnderline ? "underline" : ""} ${props.isH1 ? "text-xl" : ""} ${props.isH2 ? "text-lg" : ""} `}>
                    {props.note}
                </p>
            </div>
            {<div className="flex flex-wrap">
                {remainder && <div className="py-1.25 px-2.5">
                    <div onMouseEnter={() => setDeleteShown(true)} onMouseLeave={() => setDeleteShown(false)} className={`${props.darkMode ? "text-white" : "text-[#202124]"} flex gap-1 items-center border-2 border-[#5f6368] p-1.25 w-max text-[11px] font-semibold rounded-full relative pr-6`}>
                        {remainder}
                        {deleteShown && <img onClick={() => setRemainder(null)} className="w-4.5 h-4.5 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] rounded-full absolute right-0" src={props.darkMode ? closeIcon : darkClose} alt="" />}
                    </div>
                </div>}
                {tag && <div className="py-1.25 px-2.5">
                    <div onMouseEnter={() => setDeleteShown(true)} onMouseLeave={() => setDeleteShown(false)} className={`${props.darkMode ? "text-white" : "text-[#202124]"} flex gap-1 items-center border-2 border-[#5f6368] p-1.25 w-max text-[11px] font-semibold rounded-full relative pr-6`}>
                        {tag}
                        {deleteShown && <img onClick={() => setTag(null)} className="w-4.5 h-4.5 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] rounded-full absolute right-0" src={props.darkMode ? closeIcon : darkClose} alt="" />}
                    </div>
                </div>}
            </div>}
            {colorShown && <div className={`flex items-center flex-wrap absolute -bottom-15 -left-1/2 w-max ${props.darkMode ? "bg-[#202124]" : "bg-white"} rounded-[10px] shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] px-2.25 py-2 z-10`}>
                <div className="cursor-pointer" onClick={() => setNoteColor("")}>
                    <img src={props.darkMode ? colorIcon : darkColor} alt="" />
                </div>
                <div onClick={() => setNoteColor("#77172e")} className={`bg-[#77172e] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#692b17")} className={`bg-[#692b17] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#7c4a03")} className={`bg-[#7c4a03] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#264d3b")} className={`bg-[#264d3b] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#0c625d")} className={`bg-[#0c625d] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#256377")} className={`bg-[#256377] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#284255")} className={`bg-[#284255] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#472e5b")} className={`bg-[#472e5b] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#6c394f")} className={`bg-[#6c394f] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#4b443a")} className={`bg-[#4b443a] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
                <div onClick={() => setNoteColor("#232427")} className={`bg-[#232427] w-8 h-8 rounded-full hover:border-2 ${props.darkMode ? "border-white" : "border-black"} cursor-pointer m-0.5`}></div>
            </div>}
            {moreShown && <div className={`flex flex-col absolute top-full left-48 ${props.darkMode ? "bg-[#202124] text-white" : "bg-white text-[#202124]"} bg-[#202124] shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] text-sm py-2 w-[228.8px] z-10`}>
                <div onClick={() => deleteNote(props.id)} className="py-1.25 pl-4.25 pr-2.5 font-semibold cursor-pointer hover:bg-[rgba(255,255,255,0.3)]">Notu sil</div>
                <div
                    onClick={() => {
                        setTagMenuShown(prev => !prev);
                        setMoreShown(prev => !prev);
                    }
                    }
                    className="py-1.25 pl-4.25 pr-2.5 font-semibold hover:bg-[rgba(255,255,255,0.3)] cursor-pointer">Etiket ekle</div>
            </div>}
            {remainderMenuShown && <div className={`flex flex-col -bottom-60 absolute z-50 ${props.darkMode ? "bg-[#202124]" : "bg-white"} shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)]`}>
                <div className="p-3.75">
                    <h1 className={`text-[14px] ${props.darkMode ? "text-[#E8EAED]" : "text-[#202124]"} font-semibold`}>Daha sonra anımsat</h1>
                    <p className={`text-[13px] ${props.darkMode ? "text-[#E8EAED]" : "text-[#202124]"} font-semibold`}>Hatırlatıcılarınız Google Görevler'e kaydedilir</p>
                </div>
                <div onClick={(e) => setRemainder(e.target.textContent)} className={`flex justify-between px-3.75 py-2.5 text-[13px] ${props.darkMode ? "text-[#E8EAED] hover:bg-[#282A2C]" : "text-[#3C4043] hover:bg-[#0000001a]"} cursor-pointer`}>
                    <div className="w-full flex justify-between">Bugün daha sonra <span>18:00</span></div>
                </div>
                <div onClick={(e) => setRemainder(e.target.textContent)} className={`flex justify-between px-3.75 py-2.5 text-[13px] ${props.darkMode ? "text-[#E8EAED] hover:bg-[#282A2C]" : "text-[#3C4043] hover:bg-[#0000001a]"} cursor-pointer`}>
                    <div className="flex justify-between w-full">Yarın <span>08.00</span></div>
                </div>
                <div onClick={(e) => setRemainder(e.target.textContent)} className={`flex justify-between px-3.75 py-2.5 text-[13px] ${props.darkMode ? "text-[#E8EAED] hover:bg-[#282A2C]" : "text-[#3C4043] hover:bg-[#0000001a]"} cursor-pointer`}>
                    <div className="flex justify-between w-full">Sonraki hafta <span>Pzt, 08:00</span></div>
                </div>
                <div onClick={(e) => setRemainder(e.target.textContent)} className={`flex justify-between px-3.75 py-2.5 text-[13px] ${props.darkMode ? "text-[#E8EAED] hover:bg-[#282A2C]" : "text-[#3C4043] hover:bg-[#0000001a]"} cursor-pointer`}>
                    <p>Tarih ve saat seç</p>
                </div>
            </div>}
            {tagMenuShown && <div className={`${props.darkMode ? "bg-[#2d2e30]" : "bg-white"} absolute z-50 -right-30 bottom-8 shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)]`}>
                <div className="border-b border-[#5f6368] py-2.75">
                    <div className={`text-[14px] px-3 ${props.darkMode ? "text-white" : "text-[#202124]"}`}>
                        Note etiket ekleyin
                    </div>
                    <div className="py-2 px-3">
                        <input onChange={(e) => setTag(e.target.value)} className={`${props.darkMode ? "text-white placeholder:text-white" : "text-[#202124] placeholder:text-[#202124]"} text-[13px] focus:outline-0`} type="text" placeholder="Etiket adı girin" />
                    </div>
                </div>
                <div onClick={() => {
                    setTag(tag)
                    setTagMenuShown(prev => !prev)
                }
                }
                    className={`${props.darkMode ? "text-white" : "text-[#202124]"} text-[13px] pt-1.25 pb-0.75 px-2.5 font-semibold cursor-pointer`}>
                    {tag && `${tag} etiketini oluşturun`}
                </div>
            </div>}
            {!props.trashPage && <div className={`flex ${isShown ? "visible" : "invisible"} items-start justify-between px-4 py-3 `}>
                <div>
                    <img
                        onClick={() => setColorShown(prev => !prev)}
                        className="h-5 w-5 cursor-pointer" src={props.darkMode ? paletteIcon : darkPalette} alt="" title="Arka plan seçenekleri"
                    />
                </div>
                <div>
                    <img onClick={() => setRemainderMenuShown(prev => !prev)} className="h-5 w-5 cursor-pointer" src={props.darkMode ? alertIcon : darkAlert} alt="" title="Bana hatırlat" />
                </div>
                <div>
                    <label htmlFor="fileInput">
                        <img className="h-5 w-5 cursor-pointer" src={props.darkMode ? imageIcon : darkImage} title="Resim ekle" />
                    </label>
                    <input id="fileInput" type="file" className="hidden" />
                </div>
                <div>
                    {!props.archivePage && <img
                        onClick={() => {
                            props.setArchiveShown(prev => !prev)
                            archiveNotes(props.id)

                        }
                        }
                        className="h-5 w-5 cursor-pointer" src={props.darkMode ? archIcon : darkArch} alt="" title="Arşivle"
                    />}
                    {props.archivePage && <img
                        onClick={() => {
                            restoreArchive(props.id)
                        }
                        }
                        className="h-5 w-5 cursor-pointer" src={props.darkMode ? archIcon : darkArch} alt="" title="Arşivden çıkar"
                    />}
                </div>
                <div>
                    <img onClick={() => setMoreShown(prev => !prev)} className="h-5 w-5 cursor-pointer" src={props.darkMode ? moreIcon : darkMore} alt="" title="Diğer" />
                </div>
            </div>}
            {props.trashPage && <div className={`flex ${isShown ? "visible" : "invisible"} items-start px-4 py-3 `}>
                <div onClick={() => deleteForever(props.id)} className="flex items-center justify-center rounded-full">
                    <img className="pr-2 cursor-pointer" src={props.darkMode ? deleteForeverIcon : darkDelete} alt="" title="Tamamıyla sil" />
                </div>
                <div className="flex items-center justify-center rounded-full">
                    <img onClick={() => restoreTrash(props.id)} className="pl-2 cursor-pointer" src={props.darkMode ? restoreIcon : darkRestore} alt="" title="Geri yükle" />
                </div>
            </div>}
        </div>

    )
}