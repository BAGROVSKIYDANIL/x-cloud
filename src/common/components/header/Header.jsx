import Logo from  '../../../assets/images/Logo.png';
import './header.scss'

const Header = () =>
{
    return(
        <header className="header">
            <nav className="header__menu">
                <div className="header__logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="header__main-information">
                    <div className="header__company">Company</div>
                    <div className="header__services">Our services</div>
                    <div className="header__community">Community</div>
                    <div className="header__pricing">Pricing</div>
                </div>
                <div className="header__group">

                </div>
            </nav>
        </header>
    )
}
export default Header;