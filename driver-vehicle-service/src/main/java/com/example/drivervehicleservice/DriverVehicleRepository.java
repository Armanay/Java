package com.example.drivervehicleservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DriverVehicleRepository extends JpaRepository<DriverVehicle,Long> {
    List<DriverVehicle> findByDriverId(Long driverId);
}
