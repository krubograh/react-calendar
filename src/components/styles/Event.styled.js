import styled from "styled-components";

export const EventWrapper = styled.div`    
    text-align: left;
    font-size: 0.8rem;
    color: #009595;
    background-color: #eae9e9;
    border-radius: 4px;
    height: 3.6em;
    margin: 0.5em;
    padding: 0.6em;

    &:hover {
        background-color: #c1c1c1;
    }
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