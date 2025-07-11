package com.sqllearn.dto;

public record LearningModuleDTO(Long moduleId, String title, List<TopicDTO> topics) { }
