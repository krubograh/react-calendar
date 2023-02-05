import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader'
import WeekDays from './WeekDays';
import Dates from './Dates';
import { CalendarWrapper } from "./styles/Calendar.styled";


const Calendar = () => {
    const [activeDate, setActiveDate] = useState(new Date());
    return (
        <React.Fragment>
            <CalendarHeader activeDate={activeDate} setActiveDate={setActiveDate}/>
            <CalendarWrapper>
                <WeekDays activeDate={activeDate} setActiveDate={setActiveDate}/>
                <Dates activeDate={activeDate} setActiveDate={setActiveDate}/>
            </CalendarWrapper>
        </React.Fragment>
    );
}
 
export default Calendar;