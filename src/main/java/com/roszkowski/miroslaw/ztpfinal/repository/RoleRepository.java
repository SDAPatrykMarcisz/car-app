package com.roszkowski.miroslaw.ztpfinal.repository;

import com.roszkowski.miroslaw.ztpfinal.repository.dao.RoleEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
}
