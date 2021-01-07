package com.roszkowski.miroslaw.ztpfinal.service;

import com.roszkowski.miroslaw.ztpfinal.model.tasks.Task;
import com.roszkowski.miroslaw.ztpfinal.model.users.Role;
import com.roszkowski.miroslaw.ztpfinal.repository.TaskRepository;
import com.roszkowski.miroslaw.ztpfinal.repository.UserRepository;
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

    public List<Task> getAll(Principal principal) {
        final List<Task> taskList = new ArrayList<>();
        Optional<UserEntity> mechanic = userRepository.findByUsername(principal.getName());
        mechanic.ifPresentOrElse(
                userEntity -> {
                    if(userEntity.getRoles().stream().anyMatch(roleEntity -> Role.ADMIN.equals(roleEntity.getRoleName()))){
                        taskList.addAll(convert(taskRepository.findAll()));
                    } else if(userEntity.getRoles().stream().anyMatch(roleEntity -> Role.USER.equals(roleEntity.getRoleName()))){
                        taskList.addAll(convert(taskRepository.findAllByMechanicEquals(userEntity)));
                    }
                },
                () -> {throw new RuntimeException("user not found");}
        );
        return taskList;
    }

    public List<Task> convert(Collection<TaskEntity> taskEntityCollection){
        return taskEntityCollection.stream().map(
                taskEntity -> new Task(
                        taskEntity.getMark(),
                        taskEntity.getModel(),
                        taskEntity.getRegisterNumber(),
                        taskEntity.getMechanic().getFirstName().concat(" ").concat(taskEntity.getMechanic().getLastName()),
                        taskEntity.getStatus())
        ).collect(Collectors.toList());
    }

    public void addNew(Task requestBody) {
        TaskEntity taskEntity = new TaskEntity();
        taskEntity.setStatus(requestBody.getStatus());
        taskEntity.setMark(requestBody.getMark());
        taskEntity.setMechanic(userRepository.findByUsername(requestBody.getMechanic()).orElse(null));
        taskEntity.setModel(requestBody.getModel());
        taskEntity.setRegisterNumber(requestBody.getRegisterNumber());
        taskRepository.save(taskEntity);
    }
}
