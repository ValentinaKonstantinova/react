import flag from "../img/flag.svg";
import rating from "../img/rating.svg";
import "./headerRating.css";

function HeaderReating() {
return(
    <div className="HeaderRating">
        <div><img src={flag} alt="flag img"/></div>
        <div className="HeaderRatingBox">
            <img src={rating} alt="rating img"/>
            <p className="HeaderRatingTitle"> <span>Рейтинг в Google </span>
                на<br/> основании 180 отзывов</p>
        </div>
    </div>
);
}
export  default HeaderReating;