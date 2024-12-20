package com.leaner.server.service;

import org.springframework.http.ResponseEntity;

import com.leaner.server.dto.MessageRequestDTO;
import com.leaner.server.dto.UserRequestDTO;

public interface UserService {

    ResponseEntity<?> registerUser(UserRequestDTO userRequestDTO);

    ResponseEntity<?> loginUser(String username, String password);

    ResponseEntity<?> sendMessage(MessageRequestDTO messageRequestDTO);

}
