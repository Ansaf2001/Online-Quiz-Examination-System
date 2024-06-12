package com.sliate.online.exam.dto;

import java.util.List;

public record UserDto(Long id, String username, String name, String email, List<String> roles) {
}