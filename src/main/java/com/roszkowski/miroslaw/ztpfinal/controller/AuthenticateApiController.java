package com.roszkowski.miroslaw.ztpfinal.controller;

import com.roszkowski.miroslaw.ztpfinal.model.users.UserEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticateApiController {

    @PostMapping(path = "/api/authenticate")
    public UserEntity authenticate(){
        return new UserEntity();
    }

}
