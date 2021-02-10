package com.car.service.repository.dao;

import com.car.service.model.tasks.TaskStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private CarEntity car;

    @OneToOne
    private UserEntity mechanic;
    @OneToOne
    private PersonEntity client;

    private TaskStatus status;
    private String taskInterview;
    private String taskDoneDescription;

}
