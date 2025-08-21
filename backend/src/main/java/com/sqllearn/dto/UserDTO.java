package com.sqllearn.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UserDTO {
    private Long userId;
    private String name;
    private String email;
    private String role;
    private LocalDateTime createdAt;

    // Getters and Setters
}
