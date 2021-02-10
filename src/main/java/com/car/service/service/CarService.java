package com.car.service.service;

import com.car.service.repository.CarRepository;
import com.car.service.repository.dao.CarEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CarService {
    private final CarRepository carRepository;

    public List<CarEntity> getCars(String search) {
        List<CarEntity> cars = new ArrayList<>();
        Optional.ofNullable(search).ifPresentOrElse(
                searchParam -> {cars.addAll(filterCars(searchParam));},
                () -> {cars.addAll(carRepository.findAll());}
        );
        return cars;
    }

    private Collection<? extends CarEntity> filterCars(String searchParam) {
        return carRepository.search(searchParam);
    }
}
