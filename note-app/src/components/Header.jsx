import refreshIcon from '../assets/refresh.png'
import listIcon from '../assets/list.png'
import settingsIcon from '../assets/settings.png'
import appIcon from '../assets/apps.png'
import menuIcon from '../assets/menu.png'
import React from 'react'
import driveIcon from '../assets/google-drive.png'
import gmailIcon from '../assets/gmail.png'
import youtubeIcon from '../assets/youtube.png'
import mapsIcon from '../assets/google-maps.png'
import googleIcon from '../assets/google.png'
import calendarIcon from '../assets/google-calendar.png'
import newsIcon from '../assets/news.png'
import photosIcon from '../assets/google-photos.png'
import meetIcon from '../assets/meet.png'


export function Header({ setFlexDir , setSidebarShown }) {

    const [showSettings, setShowSettings] = React.useState(false);
    const [showApps, setShowApps] = React.useState(false);

    return (
        <header className="p-2 border-b border-[#5f6368]">
            <div className='flex items-center justify-between'>
                <div className="flex items-center gap-2 cursor-pointer">
                    <img onClick={()=> setSidebarShown(prev => !prev)} className='p-3 hover:bg-[rgba(154,160,166,0.157)] cursor-pointer rounded-full' src={menuIcon} alt="" />
                    <img className='w-10 h-10' src="https://www.gstatic.com/images/branding/productlogos/keep_2026/v2/web-48dp/logo_keep_2026_color_1x_web_48dp.png" alt="" />
                    <span className="text-[22px] text-[#E3E3E3]">Keep</span>
                </div>
                <div className='w-6/10'>
                    <input
                        className="placeholder-[#e3e3e3] text-white bg-[#282A2C] hover:bg-white hover:text-black hover:placeholder-black py-2.75 px-8 w-3/4 rounded-lg"
                        type="text"
                        placeholder="Arama Yapın"
                    />
                </div>
                <div className='flex items-center gap-0.5'>
                    <img onClick={() => location.reload()} className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full' src={refreshIcon} alt="refresh icon" />
                    <div>
                        <img onClick={() => setFlexDir(prev => !prev)} className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full' src={listIcon} alt="list icon" />
                    </div>
                    <div className='relative'>
                        <img onClick={() => setShowSettings(prev => !prev)} className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full' src={settingsIcon} alt="settings icon" />
                        {showSettings && <div className='flex flex-col text-white bg-[#202124] shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] absolute w-[208.5px] right-0 py-1.5'>
                            <a className='py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)] ' href="">Ayarlar</a>
                            <a className='py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)]' href="">Koyu temayı devre dışı bırak</a>
                            <a className='py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)]' href="">Geri Bildirim Gönder</a>
                            <a className='py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)]' href="https://support.google.com/keep/#topic=6262468" target='_blank'>Yardım</a>
                            <a className='py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)]' href="">Uygulama indirme işlemleri</a>
                            <a className='py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)]' href="">Klavye kısayolları</a>
                        </div>}
                    </div>
                    <div className='relative'>
                        <img onClick={()=>setShowApps(prev => !prev)} className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full' src={appIcon} alt="apps icon" />
                        {showApps && <div className='grid grid-cols-3 absolute gap-x-3 gap-y-5 w-70 right-0 bg-[#1b1b1b] shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] p-3 rounded-xl'>
                            <div className='flex flex-col items-center text-white gap-1 cursor-pointer'>
                                <img className='w-13.25 h-13.25' src={meetIcon} alt="" />
                                <a target='_blank' href='https://meet.google.com/landing?pli=1' className='text-sm font-semibold hover:underline'>Meet</a>
                            </div>
                            <div className='flex flex-col items-center text-white gap-1 cursor-pointer'>
                                <img className='w-13.25 h-13.25' src={driveIcon} alt="" />
                                <a target='_blank' href='https://drive.google.com/drive/home' className='text-sm font-semibold hover:underline'>Drive</a>
                            </div>
                            <div className='flex flex-col items-center text-white gap-1 cursor-pointer'>
                                <img className='w-13.25 h-13.25' src={gmailIcon} alt="" />
                                <a target='_blank' href='https://workspace.google.com/intl/tr/gmail/' className='text-sm font-semibold hover:underline'>Gmail</a>
                            </div>
                            <div className='flex flex-col items-center text-white gap-1 cursor-pointer'>
                                <img className='w-13.25 h-13.25' src={youtubeIcon} alt="" />
                                <a target='_blank' href='https://www.youtube.com/' className='text-sm font-semibold hover:underline'>Youtube</a>
                            </div>
                            <div className='flex flex-col items-center text-white gap-1 cursor-pointer'>
                                <img className='w-13.25 h-13.25' src={mapsIcon} alt="" />
                                <a target='_blank' href='https://www.google.com/maps' className='text-sm font-semibold hover:underline'>Haritalar</a>
                            </div>
                            <div className='flex flex-col items-center text-white gap-1 cursor-pointer'>
                                <img className='w-13.25 h-13.25' src={googleIcon} alt="" />
                                <a target='_blank' href='https://www.google.com/?hl=tr' className='text-sm font-semibold hover:underline'>Arama</a>
                            </div>
                            <div className='flex flex-col items-center text-white gap-1 cursor-pointer'>
                                <img className='w-13.25 h-13.25' src={calendarIcon} alt="" />
                                <a target='_blank' href='https://calendar.google.com/calendar/u/0/r?pli=1' className='text-sm font-semibold hover:underline'>Takvim</a>
                            </div>
                            <div className='flex flex-col items-center text-white gap-1 cursor-pointer'>
                                <img className='w-13.25 h-13.25' src={newsIcon} alt="" />
                                <a target='_blank' href='https://news.google.com/home?hl=tr&gl=TR&ceid=TR:tr' className='text-sm font-semibold hover:underline'>Haberler</a>
                            </div>
                            <div className='flex flex-col items-center text-white gap-1 cursor-pointer'>
                                <img className='w-13.25 h-13.25' src={photosIcon} alt="" />
                                <a target='_blank' href='https://photos.google.com/' className='text-sm font-semibold hover:underline'>Fotoğraflar</a>
                            </div>
                        </div>}
                    </div>
                    <div className='text-white bg-blue-400 rounded-full w-8 h-8 flex items-center justify-center '>
                        M
                    </div>
                </div>
            </div>
        </header>
    )
}