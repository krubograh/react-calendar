import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { parse, isMatch, isValid } from 'date-fns'
import CalendarHeader from './CalendarHeader'
import WeekDays from './WeekDays';
import Dates from './Dates';
import { CalendarWrapper, DatesWrapper } from './styles/Calendar.styled';


const Calendar = () => {
    const { urlDate } = useParams();
    const [activeDate, setActiveDate] = useState(new Date());
    const navigate = useNavigate();

    const checkUrl = (urlDate) => {
        if (isMatch(urlDate, 'yyyy-MM-dd')){
            const newDate = parse(urlDate, 'yyyy-MM-dd', new Date())
            if (isValid(newDate)) {
                setActiveDate(newDate);
            } else {
                navigate('/')
            }
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        checkUrl(urlDate);
    }, [urlDate]);
    
    
    console.log(urlDate);
    return (
            <CalendarWrapper>
                <CalendarHeader activeDate={activeDate} setActiveDate={setActiveDate}/>
                <DatesWrapper>
                    <WeekDays activeDate={activeDate} setActiveDate={setActiveDate}/>
                    <Dates activeDate={activeDate} setActiveDate={setActiveDate}/>
                </DatesWrapper>
            </CalendarWrapper>
    );
}
 
export default Calendar;