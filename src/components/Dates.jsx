import { addDays, endOfMonth, format, startOfMonth, startOfWeek } from "date-fns";
import { endOfWeek } from "date-fns/esm";
import React, { useEffect } from "react";
import { WeekGrid } from "./styles/Calendar.styled";


const Dates = ({activeDate, setActiveDate}) => {
    const startMonth = startOfMonth(activeDate)
    const startDate = startOfWeek(startMonth, {weekStartsOn : 1});
    const endMonth = endOfMonth(activeDate);
    const endDate = endOfWeek(endMonth, {weekStartsOn : 1});

    const getWeek = (date) => {
        let currentDate = date;
        let week = [];
        for (let day = 0; day < 7; day++){
            week.push(
                (currentDate >= startMonth && currentDate <= endMonth) ? 
                <div>{format(currentDate, "d")}</div>
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


    useEffect(() => {
        console.log("Promijenio se datum");
    }, [activeDate]);

    return (  
        <React.Fragment>
            <div>
                {getDates()}
            </div>
        </React.Fragment>
    );
}
 
export default Dates;