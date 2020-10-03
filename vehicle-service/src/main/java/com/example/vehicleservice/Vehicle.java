package com.example.vehicleservice;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
    @Column(unique = true)
    private String nomer;

}
