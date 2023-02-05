import { addDays, format, startOfWeek } from "date-fns";
import React from "react";
import { WeekDaysWrapper, WeekGrid } from "./styles/Calendar.styled";

const WeekDays = ({activeDate, setActiveDate}) => {
    const weekStart = startOfWeek(activeDate, {weekStartsOn : 1})
    const weekDays = []
    for (let day = 0; day < 7; day++){
        weekDays.push(
            <div key={'weekday_'+day}>{format(addDays(weekStart, day), 'EEEE')}</div>
        )
    }

    return (
        <WeekDaysWrapper>
            <WeekGrid>
                {weekDays}
            </WeekGrid>
        </WeekDaysWrapper>
    );
}
 
export default WeekDays;