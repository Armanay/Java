package com.example.drivervehicleservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class VehicleService {

    @Autowired
    private RestTemplate restTemplate;

    public Vehicle getVehicle(Long id) {
        return restTemplate.getForObject(
                "http://vehicle-service/vehicles/" + id,
                Vehicle.class);
    }
}
