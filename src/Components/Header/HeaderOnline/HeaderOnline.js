import watsapp from "./img/watsapp.svg";
import "./headerOnline.css";
function HearedOnline() {
return(
    <div className={"HeaderOnline"}>
        <div className={"HeaderOnlineTitle"}>Мы онлайн</div>
        <div><img src={watsapp} alt=""/></div>
    </div>
)
}
export default HearedOnline;