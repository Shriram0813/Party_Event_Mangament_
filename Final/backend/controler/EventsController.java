package com.example.backend.controler;



import com.example.backend.entity.events;
import com.example.backend.service.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
public class EventsController {

    @Autowired
    private EventsService eventsService;

    // Create operation
    @PostMapping
    public events createEvent(@RequestBody events event) {
        events savedEvent = eventsService.createEvent(event);
        System.out.println("Event created: " + savedEvent);
        return savedEvent;
    }

    // Read operation
    @GetMapping
    public List<events> getAllEvents() {
        return eventsService.getAllEvents();
    }

    // Update operation
    @PutMapping("/{id}")
    public events updateEvent(@PathVariable int id, @RequestBody events updatedEvent) {
        events existingEvent = eventsService.updateEvent(id, updatedEvent);
        System.out.println("Event updated: " + existingEvent);
        return existingEvent;
    }

    // Delete operation
    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable int id) {
        eventsService.deleteEvent(id);
        System.out.println("Event deleted with party id: " + id);
    }
}
