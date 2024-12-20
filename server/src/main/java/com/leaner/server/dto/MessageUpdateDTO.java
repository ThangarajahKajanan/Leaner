package com.leaner.server.dto;

public class MessageUpdateDTO {
    private String id;  
    private String content;
    private String status;

    // Default constructor
    public MessageUpdateDTO() {

    }

    // Default constructor
    public MessageUpdateDTO(String id, String content, String status) {
        this.id = id;
        this.content = content;
        this.status = status;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "MessageUpdateDTO [id=" + id + ", content=" + content + ", status=" + status + "]";
    }  
}
