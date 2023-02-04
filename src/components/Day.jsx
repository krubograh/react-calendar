import React, { useEffect, useState } from "react";
import { format } from 'date-fns'
import { DayWrapper } from "./styles/Calendar.styled";


const Day = ({day, monthEvents, activeDate}) => {
    const [dayEvents, setDayEvents] = useState([]);

    useEffect(() => {
        const events = monthEvents.filter(
            (evt) => format(new Date(evt.commit.committer.date), "P") === format(day, "P")
        );
        monthEvents.forEach(
            evt => 
                format(new Date(evt.commit.committer.date), "P") === format(day, "P") ?
                console.log(format(new Date(evt.commit.committer.date), "P"))
                : null
        );
        setDayEvents(events);
    },[monthEvents, activeDate])

    return (  
        <DayWrapper>
            <div>
                {format(day, "d")}
            </div>
            <div>
                {dayEvents.length !== 0 ?  dayEvents[0].commit.message: ""}
            </div>
            <div>
            {dayEvents.length !== 0 ?  format(new Date(dayEvents[0].commit.committer.date), "pp") : ""}
            </div>
            
        </DayWrapper>
    );
}
 
export default Day;