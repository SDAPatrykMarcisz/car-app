package com.car.service.controller;

import com.car.service.model.request.CreateUserRequest;
import com.car.service.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
@Transactional
public class UserController {

    private final UserService userService;

    @PostMapping
    private void createUser(@RequestBody CreateUserRequest createRequest){
        userService.addUser(createRequest);
    }

}
