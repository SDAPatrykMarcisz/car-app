package com.car.service.repository;

import com.car.service.repository.dao.TaskEntity;
import com.car.service.repository.dao.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<TaskEntity, Long> {

    public List<TaskEntity> findAllByMechanicEquals(UserEntity mechanic);
}
