package com.sliate.online.exam.dto;

import java.util.List;

public record AuthResponse(Long id, String firstName, String lastName, List<String> roles) {
}
