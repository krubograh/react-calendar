import React from 'react';
import { addMonths, format, subMonths } from 'date-fns'
import { CalendarHeaderWrapper, CalendarHeaderButton } from "./styles/Calendar.styled";
import { useNavigate } from 'react-router-dom';


const CalendarHeader = ({activeDate, setActiveDate}) => {
    const navigate = useNavigate();

    const dateToUrl = (activeDate) => {
        const newDate = format(activeDate, 'yyyy-MM-dd');
        return newDate;
    }

    return (
        <CalendarHeaderWrapper>
            {format(activeDate, "MMMM yyyy")}
            <div>
                <CalendarHeaderButton onClick={() => navigate('/'+dateToUrl(subMonths(activeDate, 1)))}>&lt;</CalendarHeaderButton>
                <CalendarHeaderButton onClick={() => navigate('/'+dateToUrl(addMonths(activeDate, 1)))}>&gt;</CalendarHeaderButton>
            </div>
        </CalendarHeaderWrapper>
    );
}
 
export default CalendarHeader;