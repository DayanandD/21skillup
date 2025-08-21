package com.sqllearn.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "DTO representing a topic")
public class TopicDTO {

    private Long topicId;

    @Schema(description = "Title of the topic")
    private String title;

    @Schema(description = "Content/body of the topic")
    private String content;

    @Schema(description = "Optional video URL")
    private String videoUrl;

    @Schema(description = "Code snippets for the topic")
    private String codeSnippets;
}
