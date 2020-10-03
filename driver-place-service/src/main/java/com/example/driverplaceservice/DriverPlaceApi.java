package com.example.driverplaceservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/driverPlaces")
public class DriverPlaceApi {

    @Autowired
    private DriverVehicleService driverVehicleService;

    @Autowired
    private PlaceService placeService;

    @Autowired
    private DriverPlaceRepository driverPlaceRepository;

    @GetMapping("")
    public List<DriverPlace> getAll(){
        return driverPlaceRepository.findAll();
    }

    @PostMapping("/{driverVehicleId}/{placeId}")
    public void takePlace(@PathVariable Long placeId, @PathVariable Long driverVehicleId){
        Place place = placeService.getPlaces(placeId);
        DriverVehicle driverVehicle = driverVehicleService.getDriverVehicleId(driverVehicleId);
        DriverPlace driverPlace = new DriverPlace();
        driverPlace.setName(driverVehicle.getName());
        driverPlace.setSurname(driverVehicle.getSurname());
        driverPlace.setStatus(place.isStatus());
        driverPlace.setParkingAddress(place.getParkingAddress());
        driverPlace.setParkingName(place.getParkingName());
        driverPlace.setPhone(driverVehicle.getPhone());
        driverPlace.setPlaceId(place.getId());
        driverPlace.setDriverId(driverVehicleId);
        driverPlace.setModel(driverVehicle.getModel());
        driverPlace.setNomer(driverVehicle.getNomer());
        driverPlaceRepository.save(driverPlace);
    }

    @DeleteMapping("/{driverVehicleId}/{placeId}")
    public void leavePlace(@PathVariable("placeId") Long placeId, @PathVariable("driverVehicleId") Long driverVehicleId){
        Place place = placeService.getPlaces(placeId);
        DriverVehicle driver = driverVehicleService.getDriverVehicleId(driverVehicleId);

        DriverPlace driverPlace = driverPlaceRepository.findByNameAndSurnameAndPlaceIdAndParkingAddress(driver.getName(),driver.getSurname(),placeId,place.getParkingAddress());
        driverPlaceRepository.delete(driverPlace);

        placeService.setStatus(placeId, place.getParkingAddress());

    }

}
