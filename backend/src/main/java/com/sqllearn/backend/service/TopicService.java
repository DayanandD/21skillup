package com.sqllearn.backend.service;

import com.sqllearn.backend.model.Topic;
import com.sqllearn.backend.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {
    @Autowired private TopicRepository topicRepository;

    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }

    public List<Topic> getTopicsByModule(Long moduleId) {
        return topicRepository.findByModule_ModuleId(moduleId);
    }

    public Topic createTopic(Topic topic) {
        return topicRepository.save(topic);
    }

    public Topic getTopicById(Long id) {
        return topicRepository.findById(id).orElse(null);
    }

    public void deleteTopic(Long id) {
        topicRepository.deleteById(id);
    }
}
