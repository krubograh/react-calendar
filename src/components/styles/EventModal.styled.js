import styled from "styled-components";

export const EventModalWrapper = styled.div`
    background-color: white;
    border 2px solid #e1e1e1;
    border-radius: 10px; 
    box-shadow: 0 20px 30px 0 #c1c1c1;

    width: 25rem;
    position: fixed;
    top: 20%;
    left: 35%;
    z-index: 1;
`

export const EventModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem;
    color: dimgrey;
`

export const EventModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem;
    padding-left: 0.85rem;
`
export const EventModalButton = styled.button`
    border: 0px;
    color: lightgray;
    background-color: transparent;
    &:hover {
        color: gray;
    }
    &:active {
        color: dimgray;
    }
`

export const EventModalLink = styled.a`
    color: #009595;
`