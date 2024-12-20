package com.leaner.server.repo;



import org.springframework.data.mongodb.repository.MongoRepository;
import com.leaner.server.model.User;
public interface UserRepository extends MongoRepository <User, String>{
    
    User findByUsername(String username); // For finding a user by their username
}
