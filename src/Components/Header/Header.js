import logo from '../Images/Header/logo.svg';
import './Header.css';
import HeaderReating from "./HeaderRating/HeaderRating";
import HeaderSendProject from "./HeaderSendProject/HeaderSendProject";
import HearedOnline from "./HeaderOnline/HeaderOnline";

function Header() {
    return (
        <header className="Header">
            <img className="HeaderLogo" src={logo} alt="logo img"/>
            <HeaderReating></HeaderReating>
            <HeaderSendProject></HeaderSendProject>
            <HearedOnline></HearedOnline>
        </header>
    );
}

export default Header;