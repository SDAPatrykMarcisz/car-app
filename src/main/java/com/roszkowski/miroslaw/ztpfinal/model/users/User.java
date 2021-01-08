package com.roszkowski.miroslaw.ztpfinal.model.users;

import com.roszkowski.miroslaw.ztpfinal.repository.dao.RoleEntity;
import com.roszkowski.miroslaw.ztpfinal.repository.dao.UserEntity;

import java.util.List;
import java.util.stream.Collectors;

public class User {

    private String login;
    private String password;
    private List<Role> roles;

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public User(){

    }

    public User(UserEntity userEntity){
        this.login = userEntity.getUsername();
        this.password = userEntity.getPassword();
        this.roles = userEntity.getRoles().stream().map(RoleEntity::getRoleName).collect(Collectors.toList());

    }

}
