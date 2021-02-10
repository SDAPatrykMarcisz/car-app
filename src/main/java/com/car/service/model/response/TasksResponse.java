package com.car.service.model.response;

import com.car.service.model.tasks.Task;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TasksResponse {
    private List<Task> taskList;
}
