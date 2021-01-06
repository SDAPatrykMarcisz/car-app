package com.roszkowski.miroslaw.ztpfinal.controller;

import com.roszkowski.miroslaw.ztpfinal.model.tasks.Task;
import com.roszkowski.miroslaw.ztpfinal.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RequiredArgsConstructor
@RestController("/api/task")
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    public List<Task> getTasks(){
        return taskService.getAll();
    }

}
