package com.car.service.repository;

import com.car.service.repository.dao.PersonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PersonRepository extends JpaRepository<PersonEntity, Long> {

    @Query(value = "select p from PersonEntity p " +
            "where (p.firstName) like %?1% " +
            "or (p.lastName) like %?1% " +
            "or (p.personalId) like %?1% " +
            "or (p.contact.phoneNumber) like %?1%")
    List<PersonEntity> search(String searchParam);
}
