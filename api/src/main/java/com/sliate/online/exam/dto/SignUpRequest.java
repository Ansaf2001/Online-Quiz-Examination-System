package com.sliate.online.exam.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SignUpRequest {

    @NotBlank
    private String firstName;

    @NotBlank
    private String password;

    @NotBlank
    private String lastName;

    @Email
    private String email;
}
