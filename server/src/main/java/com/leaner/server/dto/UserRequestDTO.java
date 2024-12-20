package com.leaner.server.dto;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UserRequestDTO {

    // For login and registration
    private String username;
    private String password;


    // Default constructor
    public UserRequestDTO() {
    }

    // Constructor
    public UserRequestDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserRequestDTO [username=" + username + ", password=" + password + "]";
    }
    
}
