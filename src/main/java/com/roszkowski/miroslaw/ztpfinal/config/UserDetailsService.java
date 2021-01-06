package com.roszkowski.miroslaw.ztpfinal.config;


import com.roszkowski.miroslaw.ztpfinal.model.users.User;
import com.roszkowski.miroslaw.ztpfinal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    private final UserService userService;

    @Autowired
    public UserDetailsService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User byUsername = userService
                .getByUsername(userName)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("user %s not found", userName)));
        return new UserDetails(byUsername);
    }
}
