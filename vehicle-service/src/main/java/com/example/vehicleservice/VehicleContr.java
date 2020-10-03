package com.example.vehicleservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/vehicles")
public class VehicleContr {
    @Autowired
    private VehicleRepository repository;

    @GetMapping("")
    public List<Vehicle> getVehicle(){
        return repository.findAll();
    }

    @PostMapping("")
    public void addVehicle(@RequestBody Vehicle vehicle){
        Vehicle vehicle1 = repository.findByNomer(vehicle.getNomer());
        if (vehicle1 !=null){
            throw new RuntimeException("Vehicle with this nomer exists");
        }
        repository.save(vehicle);
    }

    @GetMapping("/{id}")
    public Vehicle findById(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }


    @GetMapping("/find/")
    public Vehicle getByNomer(@RequestParam String nomer){
        return repository.findByNomer(nomer);
    }

    @DeleteMapping("/{id}")
    public void deleteVehicle(@PathVariable Long id ){
        Vehicle vehicle = repository.findById(id).get();
        repository.delete(vehicle);
    }
}
