import React, { useEffect, useState } from "react";
import { format } from 'date-fns'
import { DayWrapper, DayHeader, EventWrapper, CircleDay, EventName, EventTime } from "./styles/Calendar.styled";


const Day = ({day, monthEvents, activeDate}) => {
    const [dayEvents, setDayEvents] = useState([]);

    useEffect(() => {
        const events = monthEvents.filter(
            (evt) => format(new Date(evt.commit.committer.date), "P") === format(day, "P")
        );
        setDayEvents(events);   
    },[monthEvents, activeDate])

    return (
        <DayWrapper>
            <DayHeader>
                <CircleDay>
                    {format(day, "d")}
                </CircleDay>
            </DayHeader>
            {
                dayEvents.length !== 0 ?
                <EventWrapper>
                    <EventName style={{fontWeight: 'bold', }}>
                        {dayEvents[0].commit.message}
                    </EventName>
                    <EventTime>
                        {format(new Date(dayEvents[0].commit.committer.date), "p")}
                    </EventTime>
                </EventWrapper>
                :<></>
            }
        </DayWrapper>
    );
}
 
export default Day;