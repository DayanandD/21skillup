package com.sqllearn.backend.repository;

import com.sqllearn.backend.model.LearningModule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LearningModuleRepository extends JpaRepository<LearningModule, Long> {
}
