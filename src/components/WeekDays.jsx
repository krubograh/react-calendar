import { addDays, format, startOfWeek } from "date-fns";
import React from "react";
import { WeekGrid } from "./styles/Calendar.styled";

const WeekDays = ({activeDate, setActiveDate}) => {
    const weekStart = startOfWeek(activeDate, {weekStartsOn : 1})
    const weekDays = []
    console.log("Updateam week");
    for (let day = 0; day < 7; day++){
        weekDays.push(
            <div>{format(addDays(weekStart, day), 'EEEE')}</div>
        )
    }

    return (  
        <WeekGrid>
            {weekDays}
        </WeekGrid>
    );
}
 
export default WeekDays;