import styled from "styled-components";

export const CalendarWrapper = styled.div`
    width: 70vw;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    overflow: auto;
`
export const CalendarHeaderWrapper = styled.div`
    width: 70vw;
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: bold;

    margin-top: 1em;
    margin-bottom: 0.8em;

`

export const CalendarHeaderButton = styled.button`
    color: #009595;
    background-color: white;
    border: 2px solid #e5f6f6;
    width: 2em;
    height: 2em;
    border-radius: 6px;
    margin-left: 0.5em;

    &:hover {
        background-color: #f4f4f4;
    }
      
    &:active {
        background-color: lightgray;
    }
    
`

export const WeekGrid = styled.div`
    text-align: center;
    font-size: 0.85rem;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`
export const WeekDaysWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    background-color: #e5f6f6;
    font-weight: bold; 
    color: #009595;

    height: 6vh;
`

export const DayWrapper = styled.div`
    outline: 1px solid #e1e1e1;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: start;
    height: 15vh;
    width: 10vw;
`
export const DayHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    text-align: right;
`

export const CircleDay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    width: 3vh;
    height: 3vh;
    border-radius: 50%;
    background-color: #f4f4f4;

    margin: 0.4em;
    
    text-align: center;
    font-size: 0.8rem;
`

export const EventWrapper = styled.div`
    
    text-align: left;
    font-size: 0.8rem;
    color: #009595;
    background-color: #eae9e9;
    border-radius: 4px;
    height: 3.6em;
    margin: 0.5em;
    padding: 0.6em;
`

export const EventName = styled.div`
    margin-top: 0.2em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

export const EventTime = styled.div`
    margin-top: 0.5em;
`