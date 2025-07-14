package com.sqllearn.mapper;

import com.sqllearn.backend.model.Topic;
import com.sqllearn.dto.TopicDTO;

public class TopicMapper {
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
