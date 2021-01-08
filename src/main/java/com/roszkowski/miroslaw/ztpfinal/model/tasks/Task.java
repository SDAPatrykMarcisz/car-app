package com.roszkowski.miroslaw.ztpfinal.model.tasks;

import com.roszkowski.miroslaw.ztpfinal.repository.dao.CarEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.PersonEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.UserEntity;
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
