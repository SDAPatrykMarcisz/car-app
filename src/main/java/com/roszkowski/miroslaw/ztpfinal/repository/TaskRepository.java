package com.roszkowski.miroslaw.ztpfinal.repository;

import com.roszkowski.miroslaw.ztpfinal.repository.dao.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TaskEntity, Long> {
}
