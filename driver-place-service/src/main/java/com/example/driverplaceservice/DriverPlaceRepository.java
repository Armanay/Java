package com.example.driverplaceservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DriverPlaceRepository extends JpaRepository<DriverPlace,Long> {
    DriverPlace findByNameAndSurnameAndPlaceIdAndParkingAddress(String name, String surname, Long placeId, String parkingAddress);

}
