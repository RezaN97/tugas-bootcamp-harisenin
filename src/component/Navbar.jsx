import halfLogo from '../img/logo-chill.png'
import iconAvatar from '../img/navbar/avatar.png'
import iconDropDown from '../img/navbar/dropdown.png'
import dropdownAvatar from '../img/dropdown/icon1.png'
import dropdownPremium from '../img/dropdown/icon2.png'
import dropdownLogout from '../img/dropdown/icon3.png'


const Navbar = () => {
    return(
        <>
        <header className='bg-[#181A1C] flex w-[360px] h-[56px] px-[20px] py-[3vh]'>
                <div className='w-[268px] h-[44px] flex gap-[12px]' >
                    <img src={halfLogo} alt="Chill" className='w-[20px] h-[20px] gap-[4px]'/>
                    <nav  className='flex gap-6 py-[1vh]'>
                        <li className='list-none text-white w-[28px] h-[14px] text-[10px] font-medium'>Series</li>
                        <li className='list-none text-white w-[20px] h-[14px] text-[10px] font-medium'>Film</li>
                        <li className='list-none text-white w-[53px] h-[14px] text-[10px] font-medium'>Daftar Saya</li>
                    </nav>
                    {/* <div class="navbar-nav">
                        <a href="#">Series</a>
                        <a href="#">Film</a>
                        <a href="#">Daftar Saya</a>
                    </div> */}
                </div>
                <div class="setting-profile">
                    {/* <!-- new dropdown --> */}
                    <div class="profile-dropdown">
                        <div class="profile-dropdown">
                            <div className='w-[40px] h-[20px] flex gap-[4px]'>
                                <img className='w-[20px] h-[20px]' src={iconAvatar} alt="User Avatar"/>
                                <img className='w-{16px} h-[16px]' src={iconDropDown} alt="dropdown"/>
                            </div>
                        </div>
                    </div>
            
                </div>
            {/* <!-- membuat dropdown menu --> */}
            
            {/* <!-- end dropdown menu --> */}
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
