package com.leaner.server.service;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.leaner.server.Util.JwtUtil;
import com.leaner.server.dto.MessageRequestDTO;
import com.leaner.server.dto.UserRequestDTO;
import com.leaner.server.model.Message;
import com.leaner.server.model.Role;
import com.leaner.server.model.User;
import com.leaner.server.repo.MessageRepository;
import com.leaner.server.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public ResponseEntity<?> registerUser(UserRequestDTO userRequestDTO) {
        // Check if username already exists
  
        if (userRepository.findByUsername(userRequestDTO.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username already exists.");
        }
    

        // Save the user to the database with password encryption
        User user = new User();
        user.setUsername(userRequestDTO.getUsername());  // Set the username
        user.setPassword(passwordEncoder.encode(userRequestDTO.getPassword()));  // Hash the password
        user.setRole(Role.USER);  // Default role for users
        userRepository.save(user);  // Save the user into DB
    
        return ResponseEntity.ok("User registered successfully.");  // Return successful response
    }

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public ResponseEntity<?> loginUser(String username, String password) {

        User user = userRepository.findByUsername(username);
        if(user == null){
            return ResponseEntity.ok("User not found"); 
        }

        // Compare the plain-text password with the hashed password
        if( !passwordEncoder.matches(password, user.getPassword())) {
            return ResponseEntity.ok("Invalid password"); 
        }
         
        // Generate JWT token
        String token = jwtUtil.generateToken(user.getUsername());
        Map<String, String> response = new HashMap<>();
        response.put("token", token); 
        response.put("message", "Login successful");
        response.put("name", user.getUsername());

        return ResponseEntity.ok(response);


    }





    @Override
    public ResponseEntity<?> sendMessage(MessageRequestDTO messageRequestDTO) {

        // Get the authenticated username from the SecurityContext
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String authenticatedUsername = authentication.getName(); // This retrieves the username from the token

        Message message = new Message();

        message.setUserId(authenticatedUsername);
        message.setContent(messageRequestDTO.getContent());
        message.setStatus("PENDING");
        messageRepository.save(message);
        return ResponseEntity.ok("message saved secussfully");
    }
    
}
