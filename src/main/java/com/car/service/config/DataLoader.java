package com.car.service.config;

import com.car.service.model.users.Role;
import com.car.service.repository.*;
import com.car.service.repository.dao.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.*;

import static com.car.service.model.tasks.TaskStatus.*;

@Component
@RequiredArgsConstructor
@Transactional
public class DataLoader implements ApplicationRunner {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final TaskRepository taskRepository;
    private final PersonRepository personRepository;
    private final CarRepository carRepository;

    Map<String, Object> entities = new HashMap<>();

    public void run(ApplicationArguments args) {
        setPersons();
        setUsers();
        setInitialTasks();
    }

    private void setPersons() {
        entities.put("wojciech", personRepository.save(PersonEntity.builder().firstName("Wojciech").lastName("Letni").contact(new ContactEntity()).build()));
        entities.put("jan", personRepository.save(PersonEntity.builder().firstName("Jan").lastName("Pierwiosnek").contact(new ContactEntity()).build()));
        entities.put("mirek", personRepository.save(PersonEntity.builder().firstName("Mirek").lastName("Wrocławski").contact(new ContactEntity()).build()));
        entities.put("krzysiek", personRepository.save(PersonEntity.builder().firstName("Krzysztof").lastName("Jarzyna").contact(new ContactEntity()).build()));
        entities.put("kasiaM", personRepository.save(PersonEntity.builder().firstName("Katarzyna").lastName("Marek").contact(new ContactEntity()).build()));
        entities.put("kasiaK", personRepository.save(PersonEntity.builder().firstName("Katarzyna").lastName("Królik").contact(new ContactEntity()).build()));
    }

    private void setUsers() {
        RoleEntity adminRole = RoleEntity.builder().roleName(Role.ADMIN).build();
        RoleEntity userRole = RoleEntity.builder().roleName(Role.USER).build();
        adminRole = roleRepository.save(adminRole);
        userRole = roleRepository.save(userRole);

        UserEntity user = userRepository.save(UserEntity.builder()
                .username("user")
                .password("user123")
                .personDetails((PersonEntity) entities.get("wojciech"))
                .position("Starszy mechanik").build());
        UserEntity user2 = userRepository.save(UserEntity.builder()
                .username("mech")
                .password("mech123")
                .personDetails((PersonEntity) entities.get("jan"))
                .position("Młodszy mechanik").build());
        UserEntity admin = userRepository.save(UserEntity.builder()
                .username("admin")
                .password("admin123")
                .personDetails((PersonEntity) entities.get("mirek"))
                .position("Właściciel").build());

        user.setRoles(new ArrayList<>(Collections.singletonList(userRole)));
        user2.setRoles(new ArrayList<>(Collections.singletonList(userRole)));
        admin.setRoles(new ArrayList<>(Arrays.asList(userRole, adminRole)));

        entities.put("user", user);
        entities.put("user2", user2);
        entities.put("admin", admin);
    }


    private void setInitialTasks() {
        TaskEntity t1 = TaskEntity.builder()
                .car(carRepository.save(CarEntity.builder().mark("Nissan").model("Qashqai").registerNumber("RDE 12345").build()))
                .mechanic((UserEntity) entities.get("user"))
                .client((PersonEntity) entities.get("krzysiek"))
                .taskInterview("wymiana amortyzatorów")
                .status(NEW).build();
        TaskEntity t2 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Alfa Romeo").model("147").registerNumber("KR 3X682").build()))
                .mechanic((UserEntity) entities.get("user"))
                .client((PersonEntity) entities.get("krzysiek"))
                .taskInterview("przerysowany prawy bok. Do wymiany i malowania: tylne prawe nadkole, tylne prawe drzwi")
                .taskDoneDescription("zdemontowano tylne drzwi i zamówiono lakier")
                .status(IN_PROGRESS).build();
        TaskEntity t3 = TaskEntity.builder()
                .car(carRepository.save(CarEntity.builder().mark("BMW").model("X5").registerNumber("SB 3735X").build()))
                .mechanic((UserEntity) entities.get("user"))
                .client((PersonEntity) entities.get("krzysiek"))
                .status(FINISHED).build();
        TaskEntity t4 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Opel").model("Insignia").registerNumber("SY 9523F").build()))
                .mechanic((UserEntity) entities.get("user"))
                .client((PersonEntity) entities.get("krzysiek"))
                .status(INTERRUPTED).build();
        TaskEntity t5 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("BMW").model("650i").registerNumber("W0 OOO06").build()))
                .mechanic((UserEntity) entities.get("user2"))
                .client((PersonEntity) entities.get("kasiaM"))
                .status(NEW).build();
        TaskEntity t6 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Toyota").model("Yaris").registerNumber("WT 46299").build()))
                .mechanic((UserEntity) entities.get("user2"))
                .client((PersonEntity) entities.get("kasiaM"))
                .status(IN_PROGRESS).build();
        TaskEntity t7 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Ford").model("Mustang").registerNumber("K1 DIS").build()))
                .mechanic((UserEntity) entities.get("user2"))
                .client((PersonEntity) entities.get("kasiaM"))
                .status(FINISHED).build();
        TaskEntity t8 = TaskEntity.builder().car(carRepository.save(CarEntity.builder().mark("Seat").model("Ibiza").registerNumber("PK 1304H").build()))
                .mechanic((UserEntity) entities.get("user2"))
                .client((PersonEntity) entities.get("kasiaM")).status(INTERRUPTED)
                .build();

        taskRepository.saveAll(Arrays.asList(t1, t2, t3, t4));
        taskRepository.saveAll(Arrays.asList(t5, t6, t7, t8));
    }

}
