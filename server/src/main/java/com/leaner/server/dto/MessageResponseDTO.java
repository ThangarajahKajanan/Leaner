package com.leaner.server.dto;

public class MessageResponseDTO {
    private String id;
    private String userId;  // ID of the user who sent the message
    private String content;
    private String status;  // ACCEPTED, REJECTED, PENDING
    private String adminResponse;

    // Default constructor
    public MessageResponseDTO() {
        
    }

    // Constructor
    public MessageResponseDTO(String id, String userId, String content, String status, String adminResponse) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.status = status;
        this.adminResponse = adminResponse;
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
        return "MessageResponseDTO [id=" + id + ", userId=" + userId + ", content=" + content + ", status=" + status
                + ", adminResponse=" + adminResponse + "]";
    }

}