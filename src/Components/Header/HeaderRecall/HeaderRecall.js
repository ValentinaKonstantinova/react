import "./HeaderRecall.css"
function HeaderRecall(){
    return(
        <div className={"HeaderRecall"}>
            <div className={"HeaderRecallTime"}><span></span>Без выходных с 10:00 до 20:00</div>
            <div className={"HeaderRecallPhone"}>+7 (800) 000-00-00</div>
            <div className={"HeaderRecallOrder"}><a href="tel:+7 (800) 000-00-00">Заказать обратный звонок</a></div>
        </div>
    )
}
export default HeaderRecall;