import React from 'react';
import { addMonths, format, subMonths } from 'date-fns'

const CalendarHeader = ({activeDate, setActiveDate}) => {
    return (
        <React.Fragment>
            <button onClick={() => setActiveDate(subMonths(activeDate, 1))}>&lt;</button>
            <button onClick={() => setActiveDate(addMonths(activeDate, 1))}>&gt;</button>
            {format(activeDate, "MMMM yyyy")}
        </React.Fragment>
    );
}
 
export default CalendarHeader;