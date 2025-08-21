package com.sqllearn.backend.repository;

import com.sqllearn.backend.model.LearningModule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface LearningModuleRepository extends JpaRepository<LearningModule, Long> {

    /**
     * Calls PostgreSQL stored procedure to update time spent on a module.
     * Stored Procedure: update_module_time_spent(module_id, time_minutes)
     */
    @Modifying
    @Transactional
    @Query(value = "SELECT public.update_module_time_spentf(:moduleId, :timeSpent)", nativeQuery = true)
    void updateTimeSpentSP(
        @Param("moduleId") Long moduleId,
        @Param("timeSpent") int timeSpent
    );

    Optional<LearningModule> findByDayNumber(int dayNumber);

    Optional<LearningModule> findByTopics_TopicId(Long topicId);
}
