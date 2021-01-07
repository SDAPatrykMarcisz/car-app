package com.roszkowski.miroslaw.ztpfinal.model.tasks;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Task {
    private String mark;
    private String model;
    private String registerNumber;
    private String mechanic;
    private TaskStatus status;
}
