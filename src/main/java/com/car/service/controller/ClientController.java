package com.car.service.controller;

import com.car.service.model.response.ClientResponse;
import com.car.service.service.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService clientService;

    @GetMapping
    public ClientResponse getClients(@RequestParam(name = "search", required = false) String search){
        return ClientResponse.builder()
                .clientsList(clientService.getClients(search))
                .build();
    }

}
