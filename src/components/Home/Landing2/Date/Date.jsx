import React , {useState} from "react";
import "./Date.css"
function Dat () {
const [sec ,setSeconds] =useState(new Date().getSeconds());
const [day ,setDay] =useState(new Date().getDay());
const [min ,setMin] =useState(new Date().getMinutes());
const [ho ,setHo] =useState(new Date().getHours());

function updateTime() {
    setSeconds (new Date().getSeconds());
    setDay (new Date().getDay());
    setMin (new Date().getMinutes());
    setHo (new Date().getHours());

}
setInterval (updateTime,1000);
let Weeks = ["Sun","Mon","Tus","Wed","Thu", "Fri" , "Sat"] ;
return (
    <div className="date">
    <div className="day"><span>{Weeks[day]}</span><span>Day</span></div>
    <div className="hrs"><span>{ho<10?"0"+ho:ho}</span><span>hrs</span></div>
    <div className="min"><span>{min<10?"0"+min:min}</span><span>min</span></div>
    <div className="sec"><span>{sec<10?"0"+sec:sec}</span><span>sec</span></div>
    </div>
)
}
export default Dat ; 
