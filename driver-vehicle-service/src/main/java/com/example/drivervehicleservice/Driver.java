package com.example.drivervehicleservice;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Driver {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String surname;
    private String phone;

    public Driver() {
    }

    public Driver(Long id, String username, String password, String name, String surname, String phone) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
    }
}
