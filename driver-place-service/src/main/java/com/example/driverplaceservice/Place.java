package com.example.driverplaceservice;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Place {
    private Long id;
    private boolean status;
    private String parkingName;
    private String parkingAddress;

    public Place(Long id, boolean status, String parkingName, String parkingAddress) {
        this.id = id;
        this.status = status;
        this.parkingName = parkingName;
        this.parkingAddress = parkingAddress;
    }

    public Place() {
    }
}
