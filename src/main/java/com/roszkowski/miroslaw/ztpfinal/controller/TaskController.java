package com.roszkowski.miroslaw.ztpfinal.controller;

import com.roszkowski.miroslaw.ztpfinal.model.tasks.Task;
import com.roszkowski.miroslaw.ztpfinal.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.security.Principal;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/tasks")
@Transactional
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    public TasksResponse getTasks(Principal principal){
        return TasksResponse.builder()
                .taskList(taskService.getAll(principal))
                .build();
    }

    @PostMapping
    public void addTask(@RequestBody Task requestBody){
        taskService.addNew(requestBody);
    }

    @PutMapping("/{id}")
    public void updateTask(@RequestBody Task requestBody, @PathVariable Long id){
        taskService.update(requestBody, id);
    }


}
