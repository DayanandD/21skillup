package com.sqllearn.backend.controller;

import com.sqllearn.backend.model.LearningModule;
import com.sqllearn.backend.service.LearningModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/modules")
@CrossOrigin
public class LearningModuleController {

    @Autowired private LearningModuleService moduleService;

    @GetMapping
    public List<LearningModule> getAll() {
        return moduleService.getAllModules();
    }

    @PostMapping
    public LearningModule create(@RequestBody LearningModule module) {
        return moduleService.createModule(module);
    }

    @GetMapping("/{id}")
    public LearningModule get(@PathVariable Long id) {
        return moduleService.getModuleById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        moduleService.deleteModule(id);
    }
}
