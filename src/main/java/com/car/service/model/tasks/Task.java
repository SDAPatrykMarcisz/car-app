package com.car.service.model.tasks;

import com.car.service.repository.dao.CarEntity;
import com.car.service.repository.dao.UserEntity;
import com.car.service.repository.dao.PersonEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Task {
    private long id;
    private CarEntity car;
    private TaskStatus status;
    private UserEntity mechanic;
    private PersonEntity client;
    private String taskInterview;
    private String taskDoneDescription;
}
