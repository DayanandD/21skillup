package com.sqllearn.mapper;

import com.sqllearn.backend.model.LearningModule;
import com.sqllearn.backend.model.Topic;
import com.sqllearn.dto.LearningModuleDTO;
import com.sqllearn.dto.TopicDTO;

import java.util.List;
import java.util.stream.Collectors;

public class ModuleMapper {

    public static LearningModuleDTO toDTO(LearningModule module) {
    return new LearningModuleDTO(
        module.getModuleId(),
        module.getTitle(),
        module.getDescription(),
        module.getDayNumber(),
        module.getTimeSpent(), // ✅ map timeSpent
        module.getTopics() != null ? module.getTopics().stream()
            .map(ModuleMapper::toDTO)
            .collect(Collectors.toList()) : List.of()
    );
}


    public static TopicDTO toDTO(Topic topic) {
        return new TopicDTO(
                topic.getTopicId(),
                topic.getTitle(),
                topic.getContent(),
                topic.getVideoUrl(),
                topic.getCodeSnippets()
        );
    }
}
