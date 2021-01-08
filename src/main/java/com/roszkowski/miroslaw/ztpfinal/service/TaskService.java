package com.roszkowski.miroslaw.ztpfinal.service;

import com.roszkowski.miroslaw.ztpfinal.model.tasks.Task;
import com.roszkowski.miroslaw.ztpfinal.model.tasks.TaskStatus;
import com.roszkowski.miroslaw.ztpfinal.model.users.Role;
import com.roszkowski.miroslaw.ztpfinal.repository.CarRepository;
import com.roszkowski.miroslaw.ztpfinal.repository.PersonRepository;
import com.roszkowski.miroslaw.ztpfinal.repository.TaskRepository;
import com.roszkowski.miroslaw.ztpfinal.repository.UserRepository;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.CarEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.PersonEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.TaskEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final PersonRepository personRepository;
    private final CarRepository carRepository;

    public List<Task> getAll(Principal principal) {
        final List<Task> taskList = new ArrayList<>();
        Optional<UserEntity> mechanic = userRepository.findByUsername(principal.getName());
        mechanic.ifPresentOrElse(
                userEntity -> {
                    if (userEntity.getRoles().stream().anyMatch(roleEntity -> Role.ADMIN.equals(roleEntity.getRoleName()))) {
                        taskList.addAll(convert(taskRepository.findAll()));
                    } else if (userEntity.getRoles().stream().anyMatch(roleEntity -> Role.USER.equals(roleEntity.getRoleName()))) {
                        taskList.addAll(convert(taskRepository.findAllByMechanicEquals(userEntity)));
                    }
                },
                () -> {
                    throw new RuntimeException("user not found");
                }
        );
        return taskList;
    }

    public List<Task> convert(Collection<TaskEntity> taskEntityCollection) {
        return taskEntityCollection.stream().map(
                taskEntity -> new Task(
                        taskEntity.getId(),
                        taskEntity.getCar(),
                        taskEntity.getStatus(),
                        taskEntity.getMechanic(),
                        taskEntity.getClient(),
                        taskEntity.getTaskInterview(),
                        taskEntity.getTaskDoneDescription())
        ).collect(Collectors.toList());
    }

    public void addNew(Task requestBody) {
        TaskEntity taskEntity = new TaskEntity();
        taskEntity.setStatus(requestBody.getStatus());
        taskEntity.setMechanic(userRepository.findByUsername(requestBody.getMechanic().getUsername()).orElse(null));
        taskEntity.setCar(getOrCreate(requestBody.getCar()));
        taskEntity.setClient(getOrCreate(requestBody.getClient()));
        taskEntity.setTaskDoneDescription(requestBody.getTaskDoneDescription());
        taskEntity.setTaskInterview(requestBody.getTaskInterview());
        taskRepository.save(taskEntity);
    }

    public void update(Task requestBody, long taskId) {
        Optional<TaskEntity> byId = taskRepository.findById(taskId);
        byId.ifPresent(
                task -> {
                    CarEntity carEntity = requestBody.getCar();
                    carEntity = createOrUpdate(carEntity);

                    PersonEntity client = requestBody.getClient();
                    client = createOrUpdate(client);

                    task.setCar(carEntity);
                    task.setClient(client);
                    task.setTaskInterview(requestBody.getTaskInterview());
                    task.setTaskDoneDescription(requestBody.getTaskDoneDescription());
                    task.setStatus(Objects.isNull(requestBody.getStatus()) ? TaskStatus.NEW : requestBody.getStatus());
                }
        );
    }


    private CarEntity getOrCreate(CarEntity carEntity){
        return Optional.ofNullable(carEntity)
                .filter(entity -> Objects.nonNull(entity.getId()))
                .map(entity -> carRepository.findById(entity.getId()).orElse(null))
                .orElse(Optional.ofNullable(carEntity)
                                .map(carRepository::save)
                                .orElse(null));

    }

    private PersonEntity getOrCreate(PersonEntity personEntity){
        return Optional.ofNullable(personEntity)
                .filter(entity -> Objects.nonNull(entity.getId()))
                .map(entity -> personRepository.findById(entity.getId()).orElse(null))
                .orElse(Optional.ofNullable(personEntity)
                        .map(personRepository::save)
                        .orElse(null));

    }

    private CarEntity createOrUpdate(CarEntity carEntity) {
        final CarEntity[] toSave = new CarEntity[1]; //troche hack ;)
        if (Optional.ofNullable(carEntity).isPresent()) {
            if(Optional.ofNullable(carEntity.getId()).isPresent()){
                Optional<CarEntity> byId = carRepository.findById(carEntity.getId());
                byId.ifPresentOrElse(
                        entity -> {
                            toSave[0] = entity;
                        },
                        () -> toSave[0] = new CarEntity());
            } else {
                toSave[0] = new CarEntity();
            }
        } else {
            toSave[0] = new CarEntity();
        }
        CarEntity element = toSave[0];
        element.setMark(carEntity.getMark());
        element.setModel(carEntity.getModel());
        element.setRegisterNumber(carEntity.getRegisterNumber());
        return carRepository.save(element);
    }


    private PersonEntity createOrUpdate(PersonEntity client) {
        final PersonEntity[] toSave = new PersonEntity[1]; //troche hack ;)
        if (Optional.ofNullable(client).isPresent()) {
            Optional<PersonEntity> byId = personRepository.findById(client.getId());
            byId.ifPresentOrElse(
                    entity -> {
                        toSave[0] = entity;
                    },
                    () -> toSave[0] = new PersonEntity());
        } else {
            toSave[0] = new PersonEntity();
        }
        PersonEntity element = toSave[0];
        element.setFirstName(client.getFirstName());
        element.setLastName(client.getLastName());
        element.setPersonalId(client.getPersonalId());
        return personRepository.save(element);
    }
}
