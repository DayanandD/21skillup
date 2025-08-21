package com.sqllearn.dto;

import java.math.BigDecimal;

public class UpdateProgressRequest {
    private int userId;
    private int subtopicId;
    private BigDecimal watchedPercentage;
    private boolean completed;
    private int timeSpent; // in seconds

    // Getters and Setters
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
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public int getTimeSpent() {
        return timeSpent;
    }

    public void setTimeSpent(int timeSpent) {
        this.timeSpent = timeSpent;
    }
}
