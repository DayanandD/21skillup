package com.sqllearn.backend.controller;

import com.sqllearn.backend.service.UserProgressService;
import com.sqllearn.dto.UpdateProgressRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "User Progress", description = "APIs for tracking user progress")
@RestController
@RequestMapping("/api/progress")
@CrossOrigin
public class UserProgressController {

    @Autowired
    private UserProgressService progressService;

    @Operation(summary = "Update user progress for a subtopic")
    @PostMapping("/update")
    public ResponseEntity<Void> updateProgress(@RequestBody UpdateProgressRequest request) {
        progressService.updateProgress(
                request.getUserId(),
                request.getSubtopicId(),
                request.getWatchedPercentage(),
                request.isCompleted(),
                request.getTimeSpent()
        );
        return ResponseEntity.ok().build();
    }
}
