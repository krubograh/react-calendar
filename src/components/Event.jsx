import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import {EventWrapper, EventName, EventTime} from './styles/Event.styled';

const Event = ({dayEvent, setActiveEvent, setShowEventModal}) => {
    return (  
        <EventWrapper onClick={() => {
            setActiveEvent(dayEvent);
            setShowEventModal(true);
        }}>
            <EventName style={{fontWeight: 'bold', }}>
                {dayEvent.commit.message}
            </EventName>
            <EventTime>
                {format(new Date(dayEvent.commit.committer.date), 'p')}
            </EventTime>
        </EventWrapper>
    );
}
 
export default Event;