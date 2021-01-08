package com.roszkowski.miroslaw.ztpfinal.controller;

import com.roszkowski.miroslaw.ztpfinal.repository.dao.CarEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CarResponse {
    private List<CarEntity> carList;
}
