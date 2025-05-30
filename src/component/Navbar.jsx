import iconAvatar from '../img/navbar/avatar.png'
import iconDropDown from '../img/navbar/dropdown.png'
import dropdownAvatar from '../img/dropdown/icon1.png'
import dropdownPremium from '../img/dropdown/icon2.png'
import dropdownLogout from '../img/dropdown/icon3.png'
import logo from '../img/logo-chill.png'
import fullLogo from '../img/logo-full.png'

const Navbar = () => {

    return(
        <>
        <header className='bg-[#181A1C] flex md:w-[1440px] sm:w-[360px] md:justify-between md:py-[25px] md:px-[80px]   md:h-[94px] sm:h-[56px] px-[20px] py-[3vh]'>
                <div className='md:w-[1440px] md:text-4xl sm:text-[12px]  sm:w-[268px] md:h-[94px] sm:h-[44px] flex md:gap-[80px] sm:gap-[12px]' >
                    <img src={fullLogo} alt="logo" className='md:block max-sm:-hidden md:w-[103.55px] md:h-[44px]  md:gap-[4px]'  />
                    <img src={logo} alt="logo" className='md:hidden  sm:block sm:w-[20px] sm:h-[44px] gap-[4px]'  />
                    <nav  className='flex md:gap-[80px] sm:gap-[12px] py-[1vh]'>
                        <li className='list-none text-white md:w-[49px] sm:w-[28px] h-[14px] md:text-lg sm:text-[10px] font-medium'>Series</li>
                        <li className='list-none text-white md:w-[35px] sm:w-[20px] h-[14px] md:text-lg sm:text-[10px] font-medium'>Film</li>
                        <li className='list-none text-white md:w-[95px] sm:w-[53px] h-[14px] md:text-lg sm:text-[10px] font-medium'>Daftar Saya</li>
                    </nav>
                </div>
                <div class="setting-profile">
                    {/* <!-- new dropdown --> */}
                    <div class="profile-dropdown">
                        <div class="profile-dropdown">
                            <div className='md:w-[76px] md:h-[40px] md:gap-[8px] sm:w-[40px] sm:h-[20px] flex sm:gap-[4px]'>
                                <img className='md:w-[40px] md:h-[40px]  sm:w-[20px] sm:h-[20px]' src={iconAvatar} alt="User Avatar"/>
                                <img id='btnDropDown' className='md:w-[28px] md:h-[28px] relative md:top-[10.02px] md:left-[7px]  sm:w-{16px} sm:h-[16px]' src={iconDropDown} alt="dropdown"/>
                            </div>
                        </div>
                    </div>
            
                </div>
    </header>
        </>


    )
}


export default Navbar

const DropdownMenu = () => {
    return (
    <>
    <div class="bg-[#181A1C] relative text-white text-[10px]]">
    <ul>
        <li>
            <img id="icon-profile" src={dropdownAvatar} alt="icon profile"/> <a href="#">Profil Saya</a>
        </li>
        <li>
            <img id="icon-premium" src={dropdownPremium} alt="icon premium"/>
            <a href="#">Ubah Premium</a>
        </li>
        <li>
            <img id="icon-logout" src={dropdownLogout} alt="icon log out"/>
            <a href="#">Keluar</a>
        </li>
    </ul>
    </div> 
    </>
    )
}

