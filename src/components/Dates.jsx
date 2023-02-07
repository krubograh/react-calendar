import { addDays, endOfDay, endOfMonth, formatISO, startOfMonth, startOfWeek } from 'date-fns';
import { endOfWeek } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { WeekGrid, DayWrapper, DatesWrapper } from './styles/Day.styled';
import axios from 'axios';
import Day from './Day';
import EventModal from './EventModal';


const Dates = ({activeDate, setActiveDate}) => {
    const [monthEvents, setMonthEvents] = useState([]);
    const [showEventModal, setShowEventModal] = useState(false);
    const [activeEvent, setActiveEvent] = useState(null);
    const startMonth = startOfMonth(activeDate)
    const startDate = startOfWeek(startMonth, {weekStartsOn : 1});
    const endMonth = endOfMonth(activeDate);
    const endDate = endOfWeek(endMonth, {weekStartsOn : 1});
    

    useEffect(() => {
        axios({
            method: 'get',
            url: `repos/acheong08/ChatGPT/commits?since=${startMonth}&until=${formatISO(endOfDay(endMonth))}&per_page=100`,
            headers: {
              'accept': 'application/vnd.github+json',
            },
        }).then((response) =>{
            setMonthEvents(response.data);
        }).catch((err) => {
        })
    }, [activeDate]);

    const getWeek = (date) => {
        let currentDate = date;
        let week = [];
        for (let day = 0; day < 7; day++){
            const dayProps = {
                currentDate,
                monthEvents,
                setActiveDate,
                setActiveEvent,
                setShowEventModal
            }
            week.push(
                (currentDate >= startMonth && currentDate <= endMonth) ? 
                <Day key={'day_'+currentDate}  {...dayProps}></Day>
                :<DayWrapper></DayWrapper>
            );
            currentDate = addDays(currentDate, 1);
        }
        return <>{week}</>;
    }

    const getDates = () => {
        let currentDate = startDate;
        let dates = []; 
        while (currentDate < endDate){
            dates.push(
                <WeekGrid key={'week_'+currentDate} >{getWeek(currentDate)}</WeekGrid>
            );
            currentDate = addDays(currentDate, 7);
        }
        return <div key={'datumi'}>{dates}</div>
    }

    return (  
        <React.Fragment>
            {showEventModal ? 
            <EventModal activeEvent={activeEvent} setShowEventModal={setShowEventModal}/>
            :<></>}
            <div>
                {getDates()}
            </div>
        </React.Fragment>
    );
}
 
export default Dates;