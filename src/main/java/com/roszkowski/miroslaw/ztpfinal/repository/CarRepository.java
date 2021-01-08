package com.roszkowski.miroslaw.ztpfinal.repository;

import com.roszkowski.miroslaw.ztpfinal.repository.dao.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarRepository extends JpaRepository<CarEntity, Long> {

    @Query(value = "select c from CarEntity c where c.mark like %?1% or c.model like %?1% or c.registerNumber like %?1%")
    List<CarEntity> search(String query);
}
