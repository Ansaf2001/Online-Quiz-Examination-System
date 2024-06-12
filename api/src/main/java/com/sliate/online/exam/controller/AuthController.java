package com.sliate.online.exam.controller;


import com.sliate.online.exam.dto.AuthResponse;
import com.sliate.online.exam.dto.LoginRequest;
import com.sliate.online.exam.dto.SignUpRequest;
import com.sliate.online.exam.exception.DuplicatedUserInfoException;
import com.sliate.online.exam.model.User;
import com.sliate.online.exam.security.WebSecurityConfig;
import com.sliate.online.exam.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

//    @PostMapping("/authenticate")
//    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
//        Optional<User> userOptional = userService.validUsernameAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
//        if (userOptional.isPresent()) {
//            User user = userOptional.get();
//            return ResponseEntity.ok(new AuthResponse(user.getId(), user.getFirstName(), user.getLastName(), user.getRole()));
//        }
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
        Optional<User> userOptional = userService.validUsernameAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), null, user.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return ResponseEntity.ok(new AuthResponse(user.getId(), user.getFirstName(), user.getLastName(), user.getRoles()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/signup")
    public AuthResponse signUp(@Valid @RequestBody SignUpRequest signUpRequest) {
        if (userService.hasUserWithEmail(signUpRequest.getEmail())) {
            throw new DuplicatedUserInfoException(String.format("email %s is already been used", signUpRequest.getEmail()));
        }
//        if (userService.hasUserWithEmail(signUpRequest.getEmail())) {
//            throw new DuplicatedUserInfoException(String.format("Email %s is already been used", signUpRequest.getEmail()));
//        }

        User user = userService.saveUser(createUser(signUpRequest));
        return new AuthResponse(user.getId(), user.getFirstName(), user.getLastName(), user.getRoles());
    }

    private User createUser(SignUpRequest signUpRequest) {
        User user = new User();
        user.setFirstName(signUpRequest.getFirstName());
        user.setPassword(signUpRequest.getPassword());
        user.setLastName(signUpRequest.getLastName());
        user.setEmail(signUpRequest.getEmail());
        user.setRoles(List.of(WebSecurityConfig.USER,WebSecurityConfig.ADMIN));
        return user;
    }
}
