package com.roszkowski.miroslaw.ztpfinal.config;

import com.roszkowski.miroslaw.ztpfinal.model.users.Role;
import com.roszkowski.miroslaw.ztpfinal.repository.RoleRepository;
import com.roszkowski.miroslaw.ztpfinal.repository.TaskRepository;
import com.roszkowski.miroslaw.ztpfinal.repository.UserRepository;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.RoleEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.TaskEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static com.roszkowski.miroslaw.ztpfinal.model.tasks.TaskStatus.*;

@Component
@RequiredArgsConstructor
@Transactional
public class DataLoader implements ApplicationRunner {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final TaskRepository taskRepository;

    public void run(ApplicationArguments args) {
        setUsers();
        setInitialTasks();
    }

    private void setUsers() {
        RoleEntity adminRole = RoleEntity.builder().roleName(Role.ADMIN).build();
        RoleEntity userRole = RoleEntity.builder().roleName(Role.USER).build();

        adminRole = roleRepository.save(adminRole);

        userRole = roleRepository.save(userRole);

        UserEntity user = UserEntity.builder().username("user").password("user123").firstName("Agnieszka").lastName("Roszkowska").build();
        UserEntity user2 = UserEntity.builder().username("mech").password("mech123").firstName("Jan").lastName("Kulczyk").build();
        UserEntity admin = UserEntity.builder().username("admin").password("admin123").firstName("Miroslaw").lastName("Roszkowski").build();
        userRepository.saveAll(Stream.of(user, user2, admin).collect(Collectors.toList()));

        user.setRoles(Collections.singletonList(userRole));
        user2.setRoles(Collections.singletonList(userRole));
        admin.setRoles(Arrays.asList(userRole, adminRole));
    }

    private void setInitialTasks() {
        UserEntity firstMechanic = userRepository.findByUsername("user").get();
        UserEntity secondMechanic = userRepository.findByUsername("mech").get();

        TaskEntity t1 = TaskEntity.builder().mark("Nissan").model("Qashqai").registerNumber("RDE 12345")
                .mechanic(firstMechanic).status(NEW).build();
        TaskEntity t2 = TaskEntity.builder().mark("Alfa Romeo").model("147").registerNumber("KR 3X682")
                .mechanic(firstMechanic).status(IN_PROGRESS).build();
        TaskEntity t3 = TaskEntity.builder().mark("BMW").model("X5").registerNumber("SB 3735X")
                .mechanic(firstMechanic).status(FINISHED).build();
        TaskEntity t4 = TaskEntity.builder().mark("Opel").model("Insignia").registerNumber("SY 9523F")
                .mechanic(firstMechanic).status(INTERRUPTED).build();
        TaskEntity t5 = TaskEntity.builder().mark("BMW").model("650i").registerNumber("W0 OOO06")
                .mechanic(secondMechanic).status(NEW).build();
        TaskEntity t6 = TaskEntity.builder().mark("Toyota").model("Yaris").registerNumber("WT 46299")
                .mechanic(secondMechanic).status(IN_PROGRESS).build();
        TaskEntity t7 = TaskEntity.builder().mark("Ford").model("Mustang").registerNumber("K1 DIS")
                .mechanic(secondMechanic).status(FINISHED).build();
        TaskEntity t8 = TaskEntity.builder().mark("Seat").model("Ibiza").registerNumber("PK 1304H")
                .mechanic(secondMechanic).status(INTERRUPTED).build();

        taskRepository.saveAll(Arrays.asList(t1, t2, t3, t4));
        taskRepository.saveAll(Arrays.asList(t5, t6, t7, t8));
    }

}
