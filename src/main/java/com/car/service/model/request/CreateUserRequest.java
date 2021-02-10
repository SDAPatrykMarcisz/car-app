package com.car.service.model.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateUserRequest {

    private String username;
    private String password;
    private String position;
    private List<String> roles;
    private String firstName;
    private String lastName;
    private String personalId;
    private String phoneNumber;

}
