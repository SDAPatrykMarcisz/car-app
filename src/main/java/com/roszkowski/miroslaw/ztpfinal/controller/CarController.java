package com.roszkowski.miroslaw.ztpfinal.controller;

import com.roszkowski.miroslaw.ztpfinal.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/cars")
public class CarController {

    private final CarService carService;

    @GetMapping
    public CarResponse getCars(@RequestParam(name = "search", required = false) String search){
        return CarResponse.builder()
                .carList(carService.getCars(search))
                .build();
    }

}
