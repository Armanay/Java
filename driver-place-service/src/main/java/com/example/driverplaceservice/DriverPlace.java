package com.example.driverplaceservice;

import lombok.Data;


import javax.persistence.*;

@Entity
@Data
public class DriverPlace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String surname;
    private String phone;
    private Long placeId;
    private boolean status;
    private String parkingName;
    private String parkingAddress;
    private Long driverId;
    private String model;
    private String nomer;
}
