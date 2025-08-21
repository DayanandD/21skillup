// LearningModuleService.java
package com.sqllearn.backend.service;

import com.sqllearn.backend.model.LearningModule;
import com.sqllearn.backend.repository.LearningModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningModuleService {
    @Autowired
    private LearningModuleRepository moduleRepository;

    public List<LearningModule> getAllModules() {
        return moduleRepository.findAll();
    }

    public LearningModule createModule(LearningModule module) {
        return moduleRepository.save(module);
    }

    public LearningModule getModuleById(Long id) {
        return moduleRepository.findById(id).orElse(null);
    }

    public void deleteModule(Long id) {
        moduleRepository.deleteById(id);
    }

    public void updateTimeSpent(Long moduleId, int timeSpent) {
        moduleRepository.updateTimeSpentSP(moduleId, timeSpent); // uses stored procedure
    }

    public LearningModule getModuleByDayNumber(int dayNumber) {
        return moduleRepository.findByDayNumber(dayNumber)
                .orElseThrow(() -> new RuntimeException("Module not found for day: " + dayNumber));
    }

    public LearningModule getModuleByTopicId(Long topicId) {
        return moduleRepository.findByTopics_TopicId(topicId)
                .orElseThrow(() -> new RuntimeException("Module not found for topic ID: " + topicId));
    }
}