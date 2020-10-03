package com.example.drivervehicleservice;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class DriverVehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long driverId;
    private String name;
    private String surname;
    private String phone;
    private String model;
    private String nomer;


}
