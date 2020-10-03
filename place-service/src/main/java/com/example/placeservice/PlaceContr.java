package com.example.placeservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/places")
public class PlaceContr {

    @Autowired
    private PlaceRepository repository;

    @GetMapping("")
    public List<Place> places(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Place getPlaceById(@PathVariable("id") Long id) {

        Place place = repository.findById(id).get();
        place.setStatus(false);
        repository.save(place);
        return place;
    }

    @GetMapping("/free")
    public List<Place> freePlaces(@PathVariable("id") Long id){
        return repository.findByStatusIsFalse();
    }

    @GetMapping("/setStatus/{id}/{address}")
    public void setStatusIsTrue(@PathVariable Long id, @PathVariable String address){
        Place place = repository.findByIdAndParkingAddress(id, address);
        place.setStatus(true);
        repository.save(place);
    }

}
