import deleteIcon from '../assets/big-delete.png'
import { Note } from "./Note"
import React from "react"

export function Trash({setNotes,darkMode, deletedNotes, setDeletedNotes, trashPage }) {

    React.useEffect(() => {
        const deleted = localStorage.getItem("deletedNotes")

        if (deleted) {
            setDeletedNotes(JSON.parse(deleted))
        }
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
                <h1 className={`${darkMode ? "text-[#E8EAED]" : "text-[#202124]"} text-[17px] italic font-semibold`}>Çöp Kutusu'ndaki notlar 7 gün sonra silinir.</h1>
                {deletedNotes && <a onClick={() => { setDeletedNotes(null); localStorage.removeItem("deletedNotes") }} className={`${deletedNotes.length > 0 ? "block" : "hidden"} px-6 py-2 ml-4 cursor-pointer ${darkMode ? "text-[#8AB4F8]" : "text-[#1A73E8]"} font-semibold text-sm`}>Çöp Kutusunu boşalt</a>}
            </div>
            {deletedNotes && deletedNotes.length === 0 && <div className='flex flex-col items-center mt-[20vh]'>
                <img className='w-30 h-30 object-cover m-5' src={deleteIcon} alt="" />
                <div className='text-[22px] text-[#9AA0A6]'>Çöp Kutusu'nda not yok</div>
            </div>}
            {deletedNotes && deletedNotes.length > 0 && <div className="flex items-start gap-3 w-full mt-8 flex-wrap max-w-260">
                {deletedNotes.map((n) => (
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
                        trashPage={trashPage}
                        setDeletedNotes={setDeletedNotes}
                        setNotes={setNotes}
                        darkMode={darkMode}
                    />
                ))}
            </div>}
        </div>
    )


}