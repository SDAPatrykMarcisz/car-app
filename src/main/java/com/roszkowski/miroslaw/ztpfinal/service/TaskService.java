package com.roszkowski.miroslaw.ztpfinal.service;

import com.roszkowski.miroslaw.ztpfinal.model.tasks.Task;
import com.roszkowski.miroslaw.ztpfinal.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public List<Task> getAll() {
        return taskRepository.findAll().stream().map(
                taskEntity -> new Task(
                        taskEntity.getMark(),
                        taskEntity.getModel(),
                        taskEntity.getRegisterNumber(),
                        taskEntity.getMechanic(),
                        taskEntity.getStatus())
        ).collect(Collectors.toList());
    }
}
