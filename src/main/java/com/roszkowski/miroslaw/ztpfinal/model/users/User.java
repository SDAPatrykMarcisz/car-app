package com.roszkowski.miroslaw.ztpfinal.model.users;

import java.util.Arrays;
import java.util.List;

public class User {

    private String login;
    private String password;
    private List<Role> roles;

    public User(String login, String password) {
        this(login, password, Role.USER);
    }

    public User(String login, String password, Role... roles) {
        this.login = login;
        this.password = password;
        this.roles = Arrays.asList(roles);
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }

    public List<Role> getRoles() {
        return roles;
    }

}
