import React from "react";
import { EventModalButton, EventModalWrapper, EventModalHeader, EventModalBody, EventModalLink } from "./styles/EventModal.styled";
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';


const EventModal = ({activeEvent, setShowEventModal}) => {
    return (  
        <EventModalWrapper>
            <EventModalHeader>
                <EventModalButton>
                    <EventModalLink href={activeEvent.html_url}>
                        <LaunchIcon />
                    </EventModalLink>
                </EventModalButton>
                <EventModalButton onClick={() => {
                    setShowEventModal(false);
                }}>
                    <CloseIcon />
                </EventModalButton>
            </EventModalHeader>
            <EventModalBody>
                <h2 style={{color: '#009595'}}>{activeEvent.commit.message}</h2>
                <div>Time:   {activeEvent.commit.author.date}</div>
                <div>Author:   <EventModalLink href={activeEvent.author.html_url}>{activeEvent.commit.author.name}</EventModalLink></div>
            </EventModalBody>
        </EventModalWrapper>
    );
}
 
export default EventModal;