package com.sqllearn.backend.service;

import com.sqllearn.backend.model.User;
import com.sqllearn.backend.repository.UserRepository;
import com.sqllearn.dto.CreateUserRequest;
import com.sqllearn.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserDTO createUser(CreateUserRequest request) {
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPasswordHash(request.getPassword()); // Encrypt in real apps
        user.setRole(request.getRole() != null ? request.getRole() : "LEARNER");

        User saved = userRepository.save(user);

        return mapToDTO(saved);
    }

    public Optional<UserDTO> getUserByEmail(String email) {
        return userRepository.findByEmail(email).map(this::mapToDTO);
    }

    private UserDTO mapToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setUserId(user.getUserId());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        dto.setRole(user.getRole());
        dto.setCreatedAt(user.getCreatedAt());
        return dto;
    }
}
