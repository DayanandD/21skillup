package com.sqllearn.backend.controller;

import com.sqllearn.backend.model.Topic;
import com.sqllearn.backend.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
@CrossOrigin
public class TopicController {

    @Autowired private TopicService topicService;

    @GetMapping
    public List<Topic> getAll() {
        return topicService.getAllTopics();
    }

    @GetMapping("/module/{moduleId}")
    public List<Topic> getByModule(@PathVariable Long moduleId) {
        return topicService.getTopicsByModule(moduleId);
    }

    @PostMapping
    public Topic create(@RequestBody Topic topic) {
        return topicService.createTopic(topic);
    }

    @GetMapping("/{id}")
    public Topic get(@PathVariable Long id) {
        return topicService.getTopicById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        topicService.deleteTopic(id);
    }
}
