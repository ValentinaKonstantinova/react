import "./HeaderSendProject.css";
function HeaderSendProject() {
    return(
      <div className={"HeaderSendProjectBox"}>
          <button>Прислать проект на расчет <span></span></button>
          <a href="mailto:info@house.world"><span></span>info@house.world</a>
      </div>
    );
}
export default HeaderSendProject