package com.sqllearn.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "learning_modules")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LearningModule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long moduleId;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false)
    private String level;

    @Column(name = "day_number")
    private Integer dayNumber;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

@Column(name = "time_spent")
private int timeSpent;

public int getTimeSpent() {
    return timeSpent;
}

public void setTimeSpent(int timeSpent) {
    this.timeSpent = timeSpent;
}

    @OneToMany(mappedBy = "module", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Topic> topics;
}
