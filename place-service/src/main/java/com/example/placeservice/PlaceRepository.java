package com.example.placeservice;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceRepository extends JpaRepository<Place,Long> {
    List<Place> findByStatusIsFalse();
    Place findByIdAndParkingAddress(Long id, String parkingAddress);
}
