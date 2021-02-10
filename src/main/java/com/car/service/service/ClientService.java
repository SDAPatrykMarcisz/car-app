package com.car.service.service;

import com.car.service.repository.PersonRepository;
import com.car.service.repository.dao.PersonEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class ClientService {

    private final PersonRepository personRepository;

    public List<PersonEntity> getClients(String search){
        List<PersonEntity> persons = new ArrayList<>();
        Optional.ofNullable(search).ifPresentOrElse(
                searchParam -> {persons.addAll(filterPersons(searchParam));},
                () -> {persons.addAll(personRepository.findAll());}
        );
        return persons;
    }

    private Collection<? extends PersonEntity> filterPersons(String searchParam) {
        return personRepository.search(searchParam);
    }

}
