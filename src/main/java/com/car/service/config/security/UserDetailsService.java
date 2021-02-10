package com.car.service.config.security;


import com.car.service.model.users.User;
import com.car.service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional //potrzebne bo inaczej leci na relacji oneToMany LazyInitializationException
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    private final UserService userService;

    @Autowired
    public UserDetailsService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User byUsername = new User(userService.getByUsername(userName));
        return new UserDetails(byUsername);
    }
}
