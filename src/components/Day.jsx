import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import Event  from './Event'
import { DayWrapper, DayHeader, CircleDay } from "./styles/Day.styled";


const Day = ({currentDate, monthEvents, activeDate, setActiveEvent, setShowEventModal}) => {
    const [dayEvents, setDayEvents] = useState([]);
    const [day, setDay] = useState(currentDate);

    useEffect(() => {
        const events = monthEvents.filter(
            (evt) => format(new Date(evt.commit.committer.date), 'P') === format(day, 'P')
        );
        setDayEvents(events);   
    },[monthEvents, activeDate])

    return (
        <DayWrapper>
            <DayHeader>
                <CircleDay>
                    {format(day, 'd')}
                </CircleDay>
            </DayHeader>
            {
                dayEvents.length !== 0 ?
                <Event dayEvent={dayEvents[0]} setActiveEvent={setActiveEvent} setShowEventModal={setShowEventModal}/>
                :<></>
            }
        </DayWrapper>
    );
}
 
export default Day;