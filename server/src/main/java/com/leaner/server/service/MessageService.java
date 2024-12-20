package com.leaner.server.service;

import com.leaner.server.dto.MessageRequestDTO;
import com.leaner.server.model.Message;


public interface MessageService {

    Message sendMessage(String userId, MessageRequestDTO messageRequestDTO);

}
