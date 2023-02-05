import React from 'react';
import { addMonths, format, subMonths } from 'date-fns'
import { CalendarHeaderWrapper, CalendarHeaderButton } from "./styles/Calendar.styled";


const CalendarHeader = ({activeDate, setActiveDate}) => {
    return (
        <CalendarHeaderWrapper>
            {format(activeDate, "MMMM yyyy")}
            <div>
                <CalendarHeaderButton onClick={() => setActiveDate(subMonths(activeDate, 1))}>&lt;</CalendarHeaderButton>
                <CalendarHeaderButton onClick={() => setActiveDate(addMonths(activeDate, 1))}>&gt;</CalendarHeaderButton>
            </div>
        </CalendarHeaderWrapper>
    );
}
 
export default CalendarHeader;