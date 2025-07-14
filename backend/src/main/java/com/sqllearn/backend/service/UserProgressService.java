package com.sqllearn.backend.service;

import com.sqllearn.backend.repository.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class UserProgressService {

    @Autowired
    private ProgressRepository progressRepository;

    public void updateProgress(int userId, int subtopicId, BigDecimal watchedPercentage, boolean completed, int timeSpent) {
        progressRepository.updateProgress(userId, subtopicId, watchedPercentage, completed, timeSpent);
    }
}
