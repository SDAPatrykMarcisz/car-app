package com.car.service.model.response;

import com.car.service.repository.dao.PersonEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClientResponse {
    private List<PersonEntity> clientsList;
}
