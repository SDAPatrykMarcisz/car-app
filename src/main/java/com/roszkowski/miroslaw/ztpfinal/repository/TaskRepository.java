package com.roszkowski.miroslaw.ztpfinal.repository;

import com.roszkowski.miroslaw.ztpfinal.model.tasks.Task;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.TaskEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<TaskEntity, Long> {

    public List<TaskEntity> findAllByMechanicEquals(UserEntity mechanic);
}
