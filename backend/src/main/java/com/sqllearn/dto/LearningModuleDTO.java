package com.sqllearn.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "DTO representing a learning module")
public class LearningModuleDTO {

    private Long moduleId;

    @Schema(description = "Title of the module")
    private String title;

    @Schema(description = "Description of the module")
    private String description;

    @Schema(description = "Day number associated with the module")
    private Integer dayNumber;

    @Schema(description = "Time spent in minutes")
    private Integer timeSpent; // ✅ Add this field

    @Schema(description = "List of topics under the module")
    private List<TopicDTO> topics;
}