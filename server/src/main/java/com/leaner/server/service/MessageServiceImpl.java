package com.leaner.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leaner.server.dto.MessageRequestDTO;
import com.leaner.server.model.Message;
import com.leaner.server.repo.MessageRepository;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageRepository messageRepository;
    
    public Message sendMessage(String userId, MessageRequestDTO messageRequestDTO) {
        // Create a new Message with default status and null adminResponse
        Message message = new Message(userId, messageRequestDTO.getContent() );
        // Save the message to the database
        return messageRepository.save(message);
    }
}
