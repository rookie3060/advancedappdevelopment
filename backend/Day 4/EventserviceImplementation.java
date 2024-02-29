package com.event.kaushik.service.ServiceImplementation;


import org.springframework.stereotype.Service;

import com.event.kaushik.DTO.EventDto;
import com.event.kaushik.Entity.Event;
import com.event.kaushik.repository.EventRepo;
import com.event.kaushik.service.EventService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class EventserviceImplementation implements EventService {
    private EventRepo eventRepo;

    @Override
    public void createEvent(EventDto eventdto)
    {
        Event event = new Event();
        event.setEventName(eventdto.getEventName());
        event.setVenue(eventdto.getVenue());
        event.setDate(eventdto.getDate());
        event.setTotalCost(eventdto.getTotalCost());
        eventRepo.save(event);


    }
    

    

    
}
