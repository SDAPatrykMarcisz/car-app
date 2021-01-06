package com.roszkowski.miroslaw.ztpfinal.service;

import com.roszkowski.miroslaw.ztpfinal.model.users.Role;
import com.roszkowski.miroslaw.ztpfinal.model.users.User;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class UserService {
    private final Map<String, User> usersMap;

    {
        usersMap = new HashMap<>();
        Stream.of(
                new User("user", "user123"),
                new User("admin", "admin123", Role.USER, Role.ADMIN),
                new User("test", "test123", new Role[0])
        ).forEach(user -> usersMap.put(user.getLogin(), user));
    }

    public Optional<User> getByUsername(String username) {
        return Optional.ofNullable(usersMap.get(username));
    }
}
