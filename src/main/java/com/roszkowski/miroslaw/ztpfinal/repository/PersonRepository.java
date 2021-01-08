package com.roszkowski.miroslaw.ztpfinal.repository;

import com.roszkowski.miroslaw.ztpfinal.repository.dao.PersonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PersonRepository extends JpaRepository<PersonEntity, Long> {
    Optional<PersonEntity> findByPersonalId(String personalId);

//    @Query(value = "select p from PersonEntity p " +
//            "where (p.firstName) like %?1% " +
//            "or (p.lastName) like %?1% " +
//            "or (p.personalId) like %?1%")
////            "or (p.contact.phoneNumber) like %?1%")
        @Query(value = "select p from PersonEntity p " +
            "where (p.firstName) like %?1% " +
            "or (p.lastName) like %?1% " +
            "or (p.personalId) like %?1% " +
            "or (p.contact.phoneNumber) like %?1%")
    List<PersonEntity> search(String searchParam);
}
