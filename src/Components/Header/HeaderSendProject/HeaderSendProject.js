import "./HeaderSendProject.css";
import calc from "./img/calc.svg";
function HeaderSendProject() {
    return(
      <div className={"HeaderSendProjectBox"}>
          <button>Прислать проект на расчет <img src={calc} alt=""></img></button>
          <a href="mailto:info@house.world"><span></span>info@house.world</a>
      </div>
    );
}
export default HeaderSendProject