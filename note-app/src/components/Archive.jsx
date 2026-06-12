import { Note } from "./Note";
import React from "react";

export function Archive({ archivedNotes, setArchivedNotes }) {
    
    React.useEffect(() => {
        const archived = localStorage.getItem("deletedNotes")

        if (archived) {
            setArchivedNotes(JSON.parse(archived))
        }
    }, [])


    return (
        <div className="flex items-start gap-3 w-full mt-8">
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
                />
            ))}
        </div>
    )
}