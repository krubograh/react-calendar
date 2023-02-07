import styled from "styled-components";

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