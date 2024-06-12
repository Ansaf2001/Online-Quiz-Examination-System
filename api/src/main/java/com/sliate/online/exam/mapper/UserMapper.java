package com.sliate.online.exam.mapper;


import com.sliate.online.exam.dto.UserDto;
import com.sliate.online.exam.model.User;

public interface UserMapper {

    UserDto toUserDto(User user);
}