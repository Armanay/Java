package com.example.driverplaceservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DriverVehicleService {

    @Autowired
    private RestTemplate restTemplate;

    public DriverVehicle getDriverVehicleId(Long id) {
        return restTemplate.getForObject(
                "http://driver-vehicle-service/api/driverVeh/" + id,
                DriverVehicle.class);
    }
}
