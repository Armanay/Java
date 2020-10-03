package com.example.drivervehicleservice;

import lombok.Getter;
import lombok.Setter;
@Setter
@Getter
public class Vehicle {
    private Long id;
    private String model;
    private String nomer;

    public Vehicle() {
    }

    public Vehicle(Long id, String model, String nomer) {
        this.id = id;
        this.model = model;
        this.nomer = nomer;
    }
}
