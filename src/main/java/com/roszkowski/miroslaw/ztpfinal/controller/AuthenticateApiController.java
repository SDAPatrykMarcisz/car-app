package com.roszkowski.miroslaw.ztpfinal.controller;

import com.roszkowski.miroslaw.ztpfinal.repository.dao.UserEntity;
import com.roszkowski.miroslaw.ztpfinal.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
public class AuthenticateApiController {

    private final UserService userService;

    @PostMapping(path = "/api/authenticate")
    public UserEntity authenticate(Principal principal){
        return userService.getByUsername(principal.getName());
    }

}
