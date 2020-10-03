package com.example.driverplaceservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PlaceService {

    @Autowired
    private RestTemplate restTemplate;

    public Place getPlaces(Long id) {
        return restTemplate.getForObject(
                "http://localhost:8084/places/" + id,
                Place.class);
    }

    public void setStatus(Long id, String address) {
        restTemplate.getForObject(
                "http://localhost:8084/places/setStatus/" + id + address,
                Place.class);
    }
}
