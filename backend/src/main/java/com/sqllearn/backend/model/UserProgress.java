package com.sqllearn.backend.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_progress")
public class UserProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "progress_id")
    private Long progressId;

    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "subtopic_id", nullable = false)
    private int subtopicId;

    @Column(name = "watched_percentage", precision = 5, scale = 2)
    private BigDecimal watchedPercentage;

    @Column(name = "is_completed")
    private boolean isCompleted;

    @Column(name = "total_time_seconds")
    private int totalTimeSeconds;

    @Column(name = "last_accessed")
    private LocalDateTime lastAccessed;

    // Getters and Setters

    public Long getProgressId() {
        return progressId;
    }

    public void setProgressId(Long progressId) {
        this.progressId = progressId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getSubtopicId() {
        return subtopicId;
    }

    public void setSubtopicId(int subtopicId) {
        this.subtopicId = subtopicId;
    }

    public BigDecimal getWatchedPercentage() {
        return watchedPercentage;
    }

    public void setWatchedPercentage(BigDecimal watchedPercentage) {
        this.watchedPercentage = watchedPercentage;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public int getTotalTimeSeconds() {
        return totalTimeSeconds;
    }

    public void setTotalTimeSeconds(int totalTimeSeconds) {
        this.totalTimeSeconds = totalTimeSeconds;
    }

    public LocalDateTime getLastAccessed() {
        return lastAccessed;
    }

    public void setLastAccessed(LocalDateTime lastAccessed) {
        this.lastAccessed = lastAccessed;
    }
}
