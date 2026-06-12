import { Note } from "./Note"

export function Trash({ deletedNotes , setDeletedNotes }) {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
                <h1 className="text-[17px] text-white italic font-semibold">Çöp Kutusu'ndaki notlar 7 gün sonra silinir.</h1>
                {deletedNotes && <a onClick={()=>{setDeletedNotes(null); localStorage.removeItem("deletedNotes")}} className={`${deletedNotes.length > 0 ? "block" : "hidden"} px-6 py-2 ml-4 cursor-pointer hover:bg-[#282A2C] text-[#8AB4F8] font-semibold text-sm`}>Çöp Kutusunu boşalt</a>}
            </div>  
            <div className="flex items-start gap-3 w-full mt-8 flex-wrap">
                {deletedNotes && deletedNotes.map((n) => (
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
        </div>
    )


}