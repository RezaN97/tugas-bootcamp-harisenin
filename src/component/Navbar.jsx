import logoFull from '../img/logo-full.png'
import iconAvatar from '../img/navbar/avatar.png'
import iconDropDown from '../img/navbar/dropdown.png'
import dropdownAvatar from '../img/dropdown/icon1.png'
import dropdownPremium from '../img/dropdown/icon2.png'
import dropdownLogout from '../img/dropdown/icon3.png'


const Navbar = () => {
    return(
        <>
        <header>
            <div class="container-navbar">
                <div class="navigasi">
                    <div class="logo-chill">
                        <img src={logoFull} alt="Chill"/>
                    </div>
                    <div class="navbar-nav">
                        <a href="#">Series</a>
                        <a href="#">Film</a>
                        <a href="#">Daftar Saya</a>
                    </div>
                </div>
                <div class="setting-profile">
                    {/* <!-- new dropdown --> */}
                    <div class="profile-dropdown">
                        <div class="profile-dropdown">
                            <div class="avatar">
                                <img id="orang" src={iconAvatar} alt="User Avatar"/>
                                <img id="arrow" src={iconDropDown} alt="dropdown"/>
                            </div>
                            
                            <div class="dropdown-menu">
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
                        </div>
                    </div>
            
                </div>
            {/* <!-- membuat dropdown menu --> */}
            
            {/* <!-- end dropdown menu --> */}
        </div>
    </header>
        </>
    )
}


export default Navbar