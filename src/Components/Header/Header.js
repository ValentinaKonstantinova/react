import logo from '../Images/Header/logo.svg';
import flag from '../Images/Header/flag.svg';
import rating from '../Images/Header/rating.svg';
import './Header.css';

function Header() {
    return (
        < header className="Header">
            <img className="HeaderLogo" src={logo} alt="logo img"/>
            <div className="HeaderRating">
                <img src={flag} alt="flag img"/>
                <div className="HeaderRatingBox">
                    <img src={rating} alt="rating img"/>
                    <p className="HeaderRatingTitle"> <span>Рейтинг в Google</span>
                        на основании 180 отзывов</p>
                </div>
            </div>
        </header>
    )
}

export default Header;