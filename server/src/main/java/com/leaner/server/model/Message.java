package com.leaner.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "message")
public class Message {
    @Id
    private String id;  // Unique ID for each message
    private String userId;  // ID of the user who sent the message
    private String content;  // Message content

    private String status;   // ACCEPTED, REJECTED, PENDING
    private String adminResponse;  // Admin's response to the message

    public Message(String userId, String content) {
        this.userId = userId;
        this.content = content;
        this.status = "PENDING";  // Default status when message is created
    }

    // Default constructor
    public Message( ) {

    }

    // Constructor with all fields
    public Message(String id, String userId, String content, String status, String adminResponse) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.status = status;
        this.adminResponse = adminResponse;
    }
    
    // Constructor without id
    public Message(String userId, String content, String status, String adminResponse) {
        this.userId = userId;
        this.content = content;
        this.status = status;
        this.adminResponse = adminResponse;
    }

    // Constructor with userId and content (default status and adminResponse)
    public Message(String id, String userId, String content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    // Constructor with content
    public Message(String content) {
        this.content = content;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getAdminResponse() {
        return adminResponse;
    }
    public void setAdminResponse(String adminResponse) {
        this.adminResponse = adminResponse;
    }

    @Override
    public String toString() {
        return "Message [id=" + id + ", userId=" + userId + ", content=" + content + ", status=" + status
                + ", adminResponse=" + adminResponse + "]";
    }

    
}
