package com.leaner.server.dto;

public class MessageRequestDTO {
    
    private String content;  // Message content

    // Default constructor
    public MessageRequestDTO() {

    }

    // Constructor
    public MessageRequestDTO(String content) {
        this.content = content;
    }

    // Getters and Setters
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "MessageRequestDTO [content=" + content + "]";
    }

}