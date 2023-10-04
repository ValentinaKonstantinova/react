import logo from './img/logo.svg';
import './Header.css';
import HeaderReating from "./HeaderRating/HeaderRating";
import HeaderSendProject from "./HeaderSendProject/HeaderSendProject";
import HearedOnline from "./HeaderOnline/HeaderOnline";
import HeaderRecall from "./HeaderRecall/HeaderRecall";
function Header() {
    return (
        <header className="Header">
            <img className="HeaderLogo" src={logo} alt="logo img"/>
            <HeaderReating/>
            <HeaderSendProject/>
            <HearedOnline/>
            <HeaderRecall/>
        </header>
    );
}

export default Header;