import refreshIcon from '../assets/refresh.png'
import listIcon from '../assets/list.png'
import settingsIcon from '../assets/settings.png'
import appIcon from '../assets/apps.png'
import menuIcon from '../assets/menu.png'

export function Header() {

    return (
        <header className="p-2 border-b border-[#5f6368]">
            <div className='flex items-center justify-between'>
                <div className="flex items-center gap-2 cursor-pointer">
                    <img className='p-3 hover:bg-[rgba(154,160,166,0.157)] cursor-pointer rounded-full' src={menuIcon} alt="" />
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
                    <img className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full' src={refreshIcon} alt="refresh icon" />
                    <img className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full' src={listIcon} alt="list icon" />
                    <img className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full' src={settingsIcon} alt="settings icon" />
                    <img className='hover:bg-[rgba(154,160,166,0.157)] p-3 cursor-pointer rounded-full' src={appIcon} alt="apps icon" />
                    <div className='text-white bg-blue-400 rounded-full w-8 h-8 flex items-center justify-center '>
                        M
                    </div>
                </div>
            </div>
        </header>
    )
}