import bulbIcon from '../assets/bulb.png'
import notificationIcon from '../assets/notification.png'
import editIcon from '../assets/edit.png'
import archiveIcon from '../assets/archive.png'
import deleteIcon from '../assets/delete.png'

export function Sidebar({ sidebarShown, setArchivePage, setContentShown , setTrashPage}) {

    return (
        sidebarShown && (<div className='grow shrink-0 basis-auto pt-2 w-70'>
            <div
                onClick={() => {
                    setArchivePage(false);
                    setContentShown(true);
                    setTrashPage(false)
                }}
                className='text-[#E8EAED] flex items-center text-sm font-semibold rounded-r-full p-3 hover:bg-[#282A2C] cursor-pointer'>
                <img className='px-3' src={bulbIcon} alt="Bulb Icon" />
                <div className='ml-5'>Notlar</div>
            </div>
            <div className='text-[#E8EAED] flex items-center text-sm font-semibold p-3 hover:bg-[#282A2C] cursor-pointer rounded-r-full'>
                <img className='px-3' src={notificationIcon} alt="Notification Icon" />
                <div className='ml-5'>Hatırlatıcılar</div>
            </div>
            <div className='text-[#E8EAED] flex items-center text-sm font-semibold p-3 hover:bg-[#282A2C] cursor-pointer rounded-r-full'>
                <img className='px-3' src={editIcon} alt="Edit Icon" />
                <div className='ml-5'>Etiketleri Düzenleyin</div>
            </div>
            <div onClick={() => {
                setArchivePage(true);
                setContentShown(false);
                setTrashPage(false)
            }}
                className='text-[#E8EAED] flex items-center text-sm font-semibold p-3 hover:bg-[#282A2C] cursor-pointer rounded-r-full'>
                <img className='px-3' src={archiveIcon} alt="Archive Icon" />
                <div className='ml-5'>Arşiv</div>
            </div>
            <div onClick={() => {
                setArchivePage(false);
                setContentShown(false);
                setTrashPage(true)
            }} 
            className='text-[#E8EAED] flex items-center text-sm font-semibold p-3 hover:bg-[#282A2C] cursor-pointer rounded-r-full'>
                <img className='px-3' src={deleteIcon} alt="Archive Icon" />
                <div className='ml-5'>Çöp Kutusu</div>
            </div>
        </div>)
    )
}