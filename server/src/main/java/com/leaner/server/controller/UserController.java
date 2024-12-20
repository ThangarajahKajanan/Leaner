package com.leaner.server.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leaner.server.dto.MessageRequestDTO;
import com.leaner.server.dto.UserRequestDTO;

import com.leaner.server.service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@CrossOrigin
@RequestMapping("/api/version/users")

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRequestDTO userRequestDTO){
        return userService.registerUser(userRequestDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserRequestDTO userRequestDTO){
        // Extract username and password from the loginRequest object
        String username = userRequestDTO.getUsername();
        String password = userRequestDTO.getPassword();
        return userService.loginUser(username, password);

    }
    

    @PostMapping("/seyHello")
    public String postMethodName() {
        return "hello";
    }


    
    @PostMapping("/messages")
    public ResponseEntity<?> sendMessage(@RequestBody MessageRequestDTO messageRequestDTO){
        return userService.sendMessage(messageRequestDTO);
    }


    




    







}
