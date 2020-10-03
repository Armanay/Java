package com.example.drivervehicleservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/driverVeh")
public class DriverVehicleApi {

    @Autowired
    private DriverService driverService;
    @Autowired
    private VehicleService vehicleService;

    @Autowired
    private DriverVehicleRepository driverVehicleRepository;

    @GetMapping("/{id}")
    public DriverVehicle getById(@PathVariable Long id){
        return driverVehicleRepository.findById(id).get();
    }

    @PostMapping("/{driverId}/{vehicleId}")
    public void setVehicle(@PathVariable Long driverId, @PathVariable Long vehicleId){
        Vehicle vehicle = vehicleService.getVehicle(vehicleId);
        Driver driver = driverService.getDriver(driverId);

        DriverVehicle driverVehicle = new DriverVehicle();
        driverVehicle.setDriverId(driverId);
        driverVehicle.setName(driver.getName());
        driverVehicle.setSurname(driver.getSurname());
        driverVehicle.setPhone(driver.getPhone());
        driverVehicle.setModel(vehicle.getModel());
        driverVehicle.setNomer(vehicle.getNomer());
        driverVehicleRepository.save(driverVehicle);
    }



}