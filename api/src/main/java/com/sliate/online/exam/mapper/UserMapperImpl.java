package com.sliate.online.exam.mapper;


import com.sliate.online.exam.dto.UserDto;
import com.sliate.online.exam.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto toUserDto(User user) {
        if (user == null) {
            return null;
        }
        return new UserDto(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getRoles());
    }
}
