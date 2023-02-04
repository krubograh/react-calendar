import { addDays, endOfDay, endOfMonth, format, formatISO, startOfMonth, startOfWeek } from "date-fns";
import { endOfWeek } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import { WeekGrid } from "./styles/Calendar.styled";
import axios from "axios";
import Day from "./Day";


const Dates = ({activeDate, setActiveDate}) => {
    const [monthEvents, setMonthEvents] = useState([]);

    const startMonth = startOfMonth(activeDate)
    const startDate = startOfWeek(startMonth, {weekStartsOn : 1});
    const endMonth = endOfMonth(activeDate);
    const endDate = endOfWeek(endMonth, {weekStartsOn : 1});
    let message = '';

    useEffect(() => {
        axios({
            method: "get",
            url: `repos/krubograh/react-calendar/commits?since=${startMonth}&until=${formatISO(endOfDay(endMonth))}&per_page=2`,
            headers: {
              "accept": "application/vnd.github+json",
            },
        }).then((response) =>{
            message = response.data[0].commit.message
            setMonthEvents(response.data);
            console.log(message);
            console.log('Uspješan GET')
        }).catch((err) => {
            console.log('Neuspješan GET');
        })
    }, [activeDate]);

    useEffect(() => {
        console.log("Promijenio se datum");
    }, [activeDate]);

    const getWeek = (date) => {
        let currentDate = date;
        let week = [];
        for (let day = 0; day < 7; day++){
            week.push(
                (currentDate >= startMonth && currentDate <= endMonth) ? 
                <Day day={currentDate} monthEvents={monthEvents} activeDate={activeDate}></Day>
                :<div></div>
            );
            currentDate = addDays(currentDate, 1);
        }
        return <>{week}</>;
    }

    const getDates = () => {
        let curentDate = startDate;
        let dates = []; 
        while (curentDate < endDate){
            dates.push(
                <WeekGrid>{getWeek(curentDate)}</WeekGrid>
            );
            curentDate = addDays(curentDate, 7);
        }
        return <div>{dates}</div>
    }

    return (  
        <React.Fragment>
            <div>
                {getDates()}
            </div>
        </React.Fragment>
    );
}
 
export default Dates;