package com.sqllearn.mapper;

import com.sqllearn.backend.model.User;
import com.sqllearn.dto.UserDTO;

public class UserMapper {

    public static UserDTO toDTO(User user) {
        return new UserDTO(
                user.getUserId(),
                user.getName(),
                user.getEmail(),
                user.getRole()
        );
    }
}
