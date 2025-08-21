// LearningModuleController.java
package com.sqllearn.backend.controller;

import com.sqllearn.backend.model.LearningModule;
import com.sqllearn.backend.service.LearningModuleService;
import com.sqllearn.dto.LearningModuleDTO;
import com.sqllearn.mapper.ModuleMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sqllearn.dto.UpdateProgressRequest;

import java.util.List;

@Tag(name = "Learning Modules", description = "APIs related to learning modules")
@RestController
@RequestMapping("/api/modules")
@CrossOrigin
public class LearningModuleController {

    @Autowired
    private LearningModuleService moduleService;

    @Operation(summary = "Get all learning modules")
    @GetMapping
    public List<LearningModuleDTO> getAll() {
        return moduleService.getAllModules().stream()
                .map(ModuleMapper::toDTO)
                .toList();
    }

    @Operation(summary = "Get a module by ID")
    @GetMapping("/{id}")
    public LearningModuleDTO get(@PathVariable Long id) {
        return ModuleMapper.toDTO(moduleService.getModuleById(id));
    }

    @Operation(summary = "Create a new module")
    @PostMapping
    public LearningModuleDTO create(@RequestBody LearningModule module) {
        return ModuleMapper.toDTO(moduleService.createModule(module));
    }

    @Operation(summary = "Delete a module by ID")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        moduleService.deleteModule(id);
    }

    @PutMapping("/{id}/progress")
    public ResponseEntity<Void> updateProgress(
        @PathVariable Long id,
        @RequestBody UpdateProgressRequest request
    ) {
        moduleService.updateTimeSpent(id, request.getTimeSpent());
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Get a module by Day Number")
    @GetMapping("/day/{dayNumber}")
    public LearningModuleDTO getByDay(@PathVariable int dayNumber) {
        return ModuleMapper.toDTO(moduleService.getModuleByDayNumber(dayNumber));
    }

    @Operation(summary = "Get a module by Topic ID")
    @GetMapping("/topic/{topicId}")
    public LearningModuleDTO getByTopicId(@PathVariable Long topicId) {
        return ModuleMapper.toDTO(moduleService.getModuleByTopicId(topicId));
    }
}