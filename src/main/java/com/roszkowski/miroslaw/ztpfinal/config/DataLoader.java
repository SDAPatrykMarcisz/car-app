package com.roszkowski.miroslaw.ztpfinal.config;

import com.roszkowski.miroslaw.ztpfinal.model.users.Role;
import com.roszkowski.miroslaw.ztpfinal.repository.*;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.*;
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
    private final PersonRepository personRepository;
    private final CarRepository carRepository;

    public void run(ApplicationArguments args) {
        setUsers();
        setInitialTasks();
    }

    private void setUsers() {
        PersonEntity agnieszka = PersonEntity.builder().firstName("Wojciech").lastName("Letni").contact(new ContactEntity()).build();
        PersonEntity jan = PersonEntity.builder().firstName("Jan").lastName("Pierwiosnek").contact(new ContactEntity()).build();
        PersonEntity mirek = PersonEntity.builder().firstName("Mirek").lastName("Roszkowski").contact(new ContactEntity()).build();
        agnieszka = personRepository.save(agnieszka);
        jan = personRepository.save(jan);
        mirek = personRepository.save(mirek);

        UserEntity user = UserEntity.builder().username("user").password("user123").personDetails(agnieszka).position("Starszy mechanik").build();
        UserEntity user2 = UserEntity.builder().username("mech").password("mech123").personDetails(jan).position("Młodszy mechanik").build();
        UserEntity admin = UserEntity.builder().username("admin").password("admin123").personDetails(mirek).position("Właściciel").build();
        userRepository.saveAll(Stream.of(user, user2, admin).collect(Collectors.toList()));

        RoleEntity adminRole = RoleEntity.builder().roleName(Role.ADMIN).build();
        RoleEntity userRole = RoleEntity.builder().roleName(Role.USER).build();

        adminRole = roleRepository.save(adminRole);
        userRole = roleRepository.save(userRole);

        user.setRoles(Collections.singletonList(userRole));
        user2.setRoles(Collections.singletonList(userRole));
        admin.setRoles(Arrays.asList(userRole, adminRole));
    }

    private void setInitialTasks() {
        UserEntity firstMechanic = userRepository.findByUsername("user").get();
        UserEntity secondMechanic = userRepository.findByUsername("mech").get();

        PersonEntity krzysztof = PersonEntity.builder().firstName("Krzysztof").lastName("Jarzyna").contact(new ContactEntity()).build();
        krzysztof = personRepository.save(krzysztof);

        PersonEntity katarzyna = PersonEntity.builder().firstName("Katarzyna").lastName("Marek").contact(new ContactEntity()).build();
        katarzyna = personRepository.save(katarzyna);

        PersonEntity katarzyna2 = PersonEntity.builder().firstName("Katarzyna").lastName("Królik").contact(new ContactEntity()).build();
        katarzyna2 = personRepository.save(katarzyna2);


        TaskEntity t1 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Nissan").model("Qashqai").registerNumber("RDE 12345").build()))
                .mechanic(firstMechanic).client(krzysztof).status(NEW).build();
        TaskEntity t2 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Alfa Romeo").model("147").registerNumber("KR 3X682").build()))
                .mechanic(firstMechanic).client(krzysztof).status(IN_PROGRESS).build();
        TaskEntity t3 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("BMW").model("X5").registerNumber("SB 3735X").build()))
                .mechanic(firstMechanic).client(krzysztof).status(FINISHED).build();
        TaskEntity t4 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Opel").model("Insignia").registerNumber("SY 9523F").build()))
                .mechanic(firstMechanic).client(krzysztof).status(INTERRUPTED).build();
        TaskEntity t5 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("BMW").model("650i").registerNumber("W0 OOO06").build()))
                .mechanic(secondMechanic).client(katarzyna).status(NEW).build();
        TaskEntity t6 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Toyota").model("Yaris").registerNumber("WT 46299").build()))
                .mechanic(secondMechanic).client(katarzyna).status(IN_PROGRESS).build();
        TaskEntity t7 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Ford").model("Mustang").registerNumber("K1 DIS").build()))
                .mechanic(secondMechanic).client(katarzyna).status(FINISHED).build();
        TaskEntity t8 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Seat").model("Ibiza").registerNumber("PK 1304H").build()))
                .mechanic(secondMechanic).client(katarzyna).status(INTERRUPTED).build();

        taskRepository.saveAll(Arrays.asList(t1, t2, t3, t4));
        taskRepository.saveAll(Arrays.asList(t5, t6, t7, t8));
    }

}
