package com.leaner.server.dto;

import org.springframework.data.mongodb.core.mapping.Document;

import com.leaner.server.model.Role;

@Document(collation = "users")
public class UserResponseDTO {

    private String id;
    private String username;
    private Role role;  // Enum for roles

    // Default constructor
    public UserResponseDTO() {

    }

    // Constructor
    public UserResponseDTO(String id, String username, Role role) {
        this.id = id;
        this.username = username;
        this.role = role;
    }
    
    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "UserResponseDTO [id=" + id + ", username=" + username + ", role=" + role + "]";
    }    
}
