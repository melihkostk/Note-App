
import archiveIcon from "../assets/big-archive.png"
import { Note } from "./Note";
import React from "react";

export function Archive({ darkMode,archivedNotes, setArchivedNotes, archivePage, restoreArchive, setNotes }) {

    React.useEffect(() => {
        const archived = localStorage.getItem("archivedNotes")

        if (archived) {
            setArchivedNotes(JSON.parse(archived))
        }
    }, [])


    return (
        <>
            {archivedNotes && archivedNotes.length === 0 && <div className='flex flex-col items-center justify-center mt-[20vh]'>
                <img className='w-30 h-30 m-5' src={archiveIcon} alt="" />
                <div className='text-[22px] text-[#9AA0A6]'>Arşivlenen notlarınız burada görünür</div>
            </div>}
            <div className="flex items-start justify-center gap-3 w-full mt-8">
                {archivedNotes.map((n) => (
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
                        setArchivedNotes={setArchivedNotes}
                        archivePage={archivePage}
                        restoreArchive={restoreArchive}
                        setNotes={setNotes}
                        darkMode={darkMode}
                    />
                ))}
            </div>
        </>
    )
}