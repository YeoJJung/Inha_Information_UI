import React from "react";


function timetable(props){

    const {}=props;

    return(
        <ul>
            <li>60주년-012 강의실 {props.time}교시 사용 </li>
            <li>60주년-013 강의실 {props.time}교시 미사용</li>
        </ul>

    )
}

export default Timetable;