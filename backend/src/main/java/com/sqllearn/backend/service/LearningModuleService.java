package com.sqllearn.backend.service;

import com.sqllearn.backend.model.LearningModule;
import com.sqllearn.backend.repository.LearningModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningModuleService {
    @Autowired private LearningModuleRepository moduleRepository;

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
}
