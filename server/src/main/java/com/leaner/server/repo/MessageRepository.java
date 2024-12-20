package com.leaner.server.repo;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.leaner.server.model.Message;

public interface MessageRepository extends MongoRepository <Message, String> {
    // List<Message> findByUserId(String userId); // Fetch all messages sent by a specific user
}
