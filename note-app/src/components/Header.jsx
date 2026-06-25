import refreshIcon from '../assets/refresh.png'
import listIcon from '../assets/list.png'
import settingsIcon from '../assets/settings.png'
import appIcon from '../assets/apps.png'
import menuIcon from '../assets/menu.png'
import searchIcon from '../assets/search.png'
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


export function Header({ darkMode, setDarkMode, setFlexDir, setSidebarShown, setSearchInput, archivePage, contentShown, trashPage }) {

    const [showSettings, setShowSettings] = React.useState(false);
    const [showApps, setShowApps] = React.useState(false);
    const [searchShown, setSearchShown] = React.useState(false);

    return (
        <header className={`p-2 border-b max-[600px]:py-1 ${darkMode ? "border-[#5f6368]" : "border-[#e0e0e0]"}`}>
            <div className='flex items-center justify-between'>
                <div>
                    {!searchShown && <div>
                        {contentShown && <div className="flex items-center gap-2 cursor-pointer">
                            <img onClick={() => setSidebarShown(prev => !prev)} className='p-3 hover:bg-[rgba(154,160,166,0.157)] cursor-pointer rounded-full' src={menuIcon} alt="" title='Ana menü' />
                            <img className='w-10 h-10' src="https://www.gstatic.com/images/branding/productlogos/keep_2026/v2/web-48dp/logo_keep_2026_color_1x_web_48dp.png" alt="" />
                            <span className={`text-[22px] ${darkMode ? "text-[#E3E3E3]" : "text-[#282A2C]"} `}>Keep</span>
                        </div>}
                        {archivePage && <div className="flex items-center gap-2 cursor-pointer">
                            <img onClick={() => setSidebarShown(prev => !prev)} className='p-3 hover:bg-[rgba(154,160,166,0.157)] cursor-pointer rounded-full' src={menuIcon} alt="" />
                            <span className={`text-xl ${darkMode ? "text-[#E3E3E3]" : "text-[#282A2C]"} font-semibold`}>Arşiv</span>
                        </div>}
                        {trashPage && <div className="flex items-center gap-2 cursor-pointer">
                            <img onClick={() => setSidebarShown(prev => !prev)} className='p-3 hover:bg-[rgba(154,160,166,0.157)] cursor-pointer rounded-full' src={menuIcon} alt="" />
                            <span className={`text-xl ${darkMode ? "text-[#E3E3E3]" : "text-[#282A2C]"} font-semibold`}>Çöp Kutusu</span>
                        </div>}
                    </div>}
                </div>
                {searchShown && <div className='w-6/10'>
                    <input
                        onChange={(e) => setSearchInput(e.target.value)}
                        className='bg-white w-full h-full p-3 rounded-lg text-[#1f1f1f] shadow-[inset_1px_1px_0_rgba(0,0,0,0.25),inset_0_-1px_0_rgba(0,0,0,0.2)]' type="text" placeholder='Arama yapın' />
                </div>}
                <div className='w-6/10 flex items-center justify-center max-md:hidden'>
                    <input
                        onChange={(e) => setSearchInput(e.target.value)}
                        className={`${darkMode ? "text-white bg-[#282A2C] " : "text-[#1f1f1f] bg-[#F0F4F9]"} py-2.75 px-8 md:w-3/4 rounded-lg`}
                        type="text"
                        placeholder="Arama Yapın"
                    />
                </div>
                <div className='flex items-center gap-0.5'>
                    <div className='md:hidden'>
                        <img onClick={() => setSearchShown(prev => !prev)} className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full w-12 h-12' src={searchIcon} alt="" />
                    </div>
                    <div>
                        <img onClick={() => location.reload()} className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full w-12 h-12' src={refreshIcon} alt="refresh icon" title='Yenile' />
                    </div>
                    <div className='max-[600px]:hidden'>
                        <img onClick={() => setFlexDir(prev => !prev)} className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full w-12 h-12' src={listIcon} alt="list icon" title='Liste görünümü' />
                    </div>
                    <div className='relative'>
                        <img onClick={() => setShowSettings(prev => !prev)} className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer w-12 h-12 rounded-full' src={settingsIcon} alt="settings icon" title='Ayarlar' />
                        {showSettings && <div className={`flex flex-col ${darkMode ? "bg-[#202124] text-white" : "bg-white text-[#3C4043]"} shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] absolute w-[208.5px] right-0 py-1.5 z-10`}>
                            <a className='hover:underline py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)] ' href="">Ayarlar</a>
                            <a onClick={() => setDarkMode(prev => !prev)} className='hover:underline py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)] cursor-pointer'>{darkMode ? "Koyu temayı devre dışı bırak" : "Koyu temayı etkinleştir"}</a>
                            <a className='hover:underline py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)]' href="">Geri Bildirim Gönder</a>
                            <a className='hover:underline py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)]' href="https://support.google.com/keep/#topic=6262468" target='_blank'>Yardım</a>
                            <a className='hover:underline py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)]' href="">Uygulama indirme işlemleri</a>
                            <a className='hover:underline py-1.25 pl-4.25 pr-2.5 text-sm font-semibold hover:bg-[rgba(255,255,255,0.3)]' href="">Klavye kısayolları</a>
                        </div>}
                    </div>
                    <div className='relative'>
                        <img onClick={() => setShowApps(prev => !prev)} className='hover:bg-[rgba(154,160,166,0.157)] w-12 h-12 p-3 cursor-pointer rounded-full max-[405px]:hidden' src={appIcon} alt="apps icon" title='Google uygulamaları' />
                        {showApps && <div className={`grid grid-cols-3 absolute gap-x-3 gap-y-5 w-70 right-0 ${darkMode ? "bg-[#1b1b1b]" : "bg-[#f8fafd]"} shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.3)] p-3 rounded-xl z-10`}>
                            <div className={`flex flex-col items-center ${darkMode ? "text-white" : "text-[#1f1f1f]"} gap-1 cursor-pointer`}>
                                <img className='w-13.25 h-13.25' src={meetIcon} alt="" />
                                <a target='_blank' href='https://meet.google.com/landing?pli=1' className='text-sm font-semibold hover:underline'>Meet</a>
                            </div>
                            <div className={`flex flex-col items-center ${darkMode ? "text-white" : "text-[#1f1f1f]"} gap-1 cursor-pointer`}>
                                <img className='w-13.25 h-13.25' src={driveIcon} alt="" />
                                <a target='_blank' href='https://drive.google.com/drive/home' className='text-sm font-semibold hover:underline'>Drive</a>
                            </div>
                            <div className={`flex flex-col items-center ${darkMode ? "text-white" : "text-[#1f1f1f]"} gap-1 cursor-pointer`}>
                                <img className='w-13.25 h-13.25' src={gmailIcon} alt="" />
                                <a target='_blank' href='https://workspace.google.com/intl/tr/gmail/' className='text-sm font-semibold hover:underline'>Gmail</a>
                            </div>
                            <div className={`flex flex-col items-center ${darkMode ? "text-white" : "text-[#1f1f1f]"} gap-1 cursor-pointer`}>
                                <img className='w-13.25 h-13.25' src={youtubeIcon} alt="" />
                                <a target='_blank' href='https://www.youtube.com/' className='text-sm font-semibold hover:underline'>Youtube</a>
                            </div>
                            <div className={`flex flex-col items-center ${darkMode ? "text-white" : "text-[#1f1f1f]"} gap-1 cursor-pointer`}>
                                <img className='w-13.25 h-13.25' src={mapsIcon} alt="" />
                                <a target='_blank' href='https://www.google.com/maps' className='text-sm font-semibold hover:underline'>Haritalar</a>
                            </div>
                            <div className={`flex flex-col items-center ${darkMode ? "text-white" : "text-[#1f1f1f]"} gap-1 cursor-pointer`}>
                                <img className='w-13.25 h-13.25' src={googleIcon} alt="" />
                                <a target='_blank' href='https://www.google.com/?hl=tr' className='text-sm font-semibold hover:underline'>Arama</a>
                            </div>
                            <div className={`flex flex-col items-center ${darkMode ? "text-white" : "text-[#1f1f1f]"} gap-1 cursor-pointer`}>
                                <img className='w-13.25 h-13.25' src={calendarIcon} alt="" />
                                <a target='_blank' href='https://calendar.google.com/calendar/u/0/r?pli=1' className='text-sm font-semibold hover:underline'>Takvim</a>
                            </div>
                            <div className={`flex flex-col items-center ${darkMode ? "text-white" : "text-[#1f1f1f]"} gap-1 cursor-pointer`}>
                                <img className='w-13.25 h-13.25' src={newsIcon} alt="" />
                                <a target='_blank' href='https://news.google.com/home?hl=tr&gl=TR&ceid=TR:tr' className='text-sm font-semibold hover:underline'>Haberler</a>
                            </div>
                            <div className={`flex flex-col items-center ${darkMode ? "text-white" : "text-[#1f1f1f]"} gap-1 cursor-pointer`}>
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