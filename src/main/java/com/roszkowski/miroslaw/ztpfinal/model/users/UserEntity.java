package com.roszkowski.miroslaw.ztpfinal.model.users;

import lombok.Data;

@Data
public class UserEntity {

    private long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;

    public UserEntity() {
        this.username = "user";
        this.password = "password";
        this.firstName = "Patryk";
        this.lastName = "Marcisz";
    }
}
