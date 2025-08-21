package com.sqllearn.backend.repository;

import com.sqllearn.backend.model.UserProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;

public interface ProgressRepository extends JpaRepository<UserProgress, Long> {

    @Modifying
    @Transactional
    @Query(value = "call public.update_user_progressfsp(:userId, :subtopicId, :watchedPercent, :completed, :timeSpent)", nativeQuery = true)
    void updateProgress(
        @Param("userId") int userId,
        @Param("subtopicId") int subtopicId,
        @Param("watchedPercent") BigDecimal watchedPercent,
        @Param("completed") boolean completed,
        @Param("timeSpent") int timeSpent
    );
}
