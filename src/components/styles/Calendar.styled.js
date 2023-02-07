import styled from "styled-components";

export const CalendarWrapper = styled.div`
    height: 100vh;
    width: 100vw;
`

export const DatesWrapper = styled.div`
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





