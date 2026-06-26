import deleteIcon from '../assets/big-delete.png'
import { Note } from "./Note"
import React from "react"

export function Trash({searchInput,setDeletePShown, setNotes, darkMode, deletedNotes, setDeletedNotes, trashPage }) {

    const [id, setID] = React.useState([])
    const [deleteWarning, setDeleteWarning] = React.useState(false);

    React.useEffect(() => {
        fetch("https://demo.pigasoft.com/intern/melih-kostak/note/public/api/notes/deleted/list")
            .then(res => res.json())
            .then(data => {
                setDeletedNotes(data)
                setID(data.map(item => item.id))
            })
    }, [])

    function deleteAll() {
        id.map(item => {
            fetch(`https://demo.pigasoft.com/intern/melih-kostak/note/public/api/notes/${item}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log("Deleted", data))
            setDeletedNotes([])
        })
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
                <h1 className={`${darkMode ? "text-[#E8EAED]" : "text-[#202124]"} text-[17px] italic font-semibold text-center`}>Çöp Kutusu'ndaki notlar 7 gün sonra silinir.</h1>
                {deletedNotes && <a onClick={() => setDeleteWarning(true)} className={`${deletedNotes.length > 0 ? "block" : "hidden"} px-6 py-2 ml-4 cursor-pointer truncate ${darkMode ? "text-[#8AB4F8]" : "text-[#1A73E8]"} font-semibold text-sm`}>Çöp Kutusunu boşalt</a>}
            </div>
            {deletedNotes && deletedNotes.length === 0 && <div className='flex flex-col items-center mt-[20vh]'>
                <img className='w-30 h-30 object-cover m-5' src={deleteIcon} alt="" />
                <div className='text-[22px] text-[#9AA0A6]'>Çöp Kutusu'nda not yok</div>
            </div>}
            {deletedNotes && deletedNotes.length > 0 && <div className="flex items-start justify-center gap-3 w-full mt-8 flex-wrap max-w-260">
                {deletedNotes.filter((item) => { return searchInput.toLowerCase() === "" ? item : item.description.toLowerCase().includes(searchInput) }).map((n, index) => (
                    <Note
                        key={n.id ?? index}
                        id={n.id}
                        title={n.title}
                        note={n.description}
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
                        setDeletePShown={setDeletePShown}
                    />
                ))}
            </div>}
            {deleteWarning && <div className={`flex flex-col ${darkMode ? "bg-[#313235]" : "bg-[#ffffff]"} fixed top-60 p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.6),0_4px_8px_3px_rgba(0,0,0,0.3)] rounded-lg`}>
                <div className={`${darkMode ? "text-[#E8EAED]" : "text-[#3C4043]"} text-sm font-semibold pb-6`}>
                    Çöp kutusu boşaltılsın mı?  Çöp Kutusu'ndaki tüm notlar kalıcı olarak silinecektir.
                </div>
                <div className='flex items-center justify-end'>
                    <div onClick={() => setDeleteWarning(false)} className={`${darkMode ? "text-[#E8EAED]" : "text-[#000000DE]"} text-sm font-semibold py-2 px-6 mr-4 cursor-pointer`}>
                        İptal
                    </div>
                    <div onClick={() => { deleteAll(); setDeleteWarning(false) }} className={`${darkMode ? "text-[#8ab4f8]" : "text-[#1A73E8]"} text-sm font-semibold py-2 px-6 cursor-pointer`} >
                        Çöp Kutusu'nu boşalt
                </div>
            </div>
            </div>}
        </div >
    )


}