package com.example.driverservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/drivers")
public class DriverContr {

    @Autowired
    private DriverRepository driverRepository;

    @GetMapping("")
    public List<Driver> driverList(){
        return driverRepository.findAll();
    }

    @GetMapping("/{id}")
    public Driver getById(@PathVariable("id") Long id)
    {
        return driverRepository.findById(id).get();
    }

    @GetMapping("/user/{username}")
    public Driver getByUsername(@PathVariable("username") String username) throws Exception {

        if (driverRepository.findByUsername(username) != null) {
            return driverRepository.findByUsername(username);
        }
        else {
            throw new Exception("not found");
        }
    }


    @PostMapping("")
    public void newDriver(@RequestBody Driver driver) throws Exception{
       if (driverRepository.findByUsername(driver.getUsername()) == null){
           driverRepository.save(driver);
       }
        else {
            throw new Exception("Such user already exists");
       }
    }


    @DeleteMapping("/{id}")
    public void removeDriver(@PathVariable Long id){
        Driver driver = driverRepository.findById(id).get();
        driverRepository.delete(driver);
    }
}

