package com.car.service.repository;

import com.car.service.repository.dao.RoleEntity;
import com.car.service.model.users.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    Optional<RoleEntity> findByRoleName(Role role);
}
