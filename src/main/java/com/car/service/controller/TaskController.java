package com.car.service.controller;

import com.car.service.service.TaskService;
import com.car.service.model.response.TasksResponse;
import com.car.service.model.tasks.Task;
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

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        taskService.delete(id);
    }

}
