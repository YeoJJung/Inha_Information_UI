import React, {useState} from "react";
import Timetable from "./lecture";

function getTimetable(){
    const [isClicked, setIsClicked] = useState(false);

    const handleClicked = () =>{
        setIsClicked(true);
    }

    return(
        <Timetable></Timetable>
    );
}