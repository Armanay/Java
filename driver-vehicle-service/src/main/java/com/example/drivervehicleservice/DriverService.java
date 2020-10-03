package com.example.drivervehicleservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DriverService {

    @Autowired
    private RestTemplate restTemplate;

    public Driver getDriver(Long id) {
        return restTemplate.getForObject(
                "http://driver-service/drivers/" + id,
                Driver.class);
    }
}
