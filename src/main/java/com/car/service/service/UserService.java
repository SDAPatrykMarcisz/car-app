package com.car.service.service;

import com.car.service.model.request.CreateUserRequest;
import com.car.service.repository.RoleRepository;
import com.car.service.repository.UserRepository;
import com.car.service.repository.dao.UserEntity;
import com.car.service.model.users.Role;
import com.car.service.repository.dao.ContactEntity;
import com.car.service.repository.dao.PersonEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserEntity getByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(String.format("user %s not found", username)));
    }

    public void addUser(CreateUserRequest request) {
        userRepository.save(UserEntity.builder()
                .username(request.getUsername())
                .password(request.getPassword())
                .roles(request.getRoles().stream().map(role -> roleRepository.findByRoleName(Role.valueOf(role)).orElseThrow(() -> new RuntimeException())).collect(Collectors.toList()))
                .personDetails(
                        PersonEntity.builder()
                                .firstName(request.getFirstName())
                                .lastName(request.getLastName())
                                .contact(ContactEntity.builder()
                                        .phoneNumber(request.getPhoneNumber())
                                        .build())
                                .build())
                .position(request.getPosition())
                .build());
    }
}
