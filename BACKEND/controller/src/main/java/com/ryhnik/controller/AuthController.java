package com.ryhnik.controller;

import com.ryhnik.dto.user.*;
import com.ryhnik.entity.User;
import com.ryhnik.mapper.UserMapper;
import com.ryhnik.service.EmailService;
import com.ryhnik.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping(value = "api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
@Tag(name = "Auth", description = "API for auth")
public class AuthController {

    private final UserService userService;
    private final UserMapper userMapper;
    private final EmailService emailService;

    public AuthController(UserService userService,
                          UserMapper userMapper,
                          EmailService emailService) {
        this.userService = userService;
        this.userMapper = userMapper;
        this.emailService = emailService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserOutputDto> register(@RequestBody UserInputCreateDto userInputCreateDto) {
        User user = userService.registerUser(userInputCreateDto);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(userMapper.toUserOutputDto(user));
    }

    @PostMapping("/login")
    public ResponseEntity<UserAuth> auth(@RequestBody UserAuthRequest request) {
        UserAuth userAuth = userService.userAuth(request);

        return ResponseEntity.status(HttpStatus.OK)
                .body(userAuth);
    }

    @PostMapping("/check-email")
    public ResponseEntity<Void> checkEmail(@RequestBody @Valid CheckEmailDto emailDto) {
        userService.checkEmail(emailDto.getEmail());

        return ResponseEntity.status(HttpStatus.OK)
                .build();
    }

    @PostMapping("/approve-email")
    public ResponseEntity<Void> sendEmail(Principal principal) {
        emailService.sendApproveLinkByUser(principal);

        return ResponseEntity.status(HttpStatus.OK)
                .build();
    }

    @GetMapping("/approve-account")
    public ResponseEntity<Void> approveAccount(@RequestParam String email) {
        userService.approveAccount(email);

        return ResponseEntity.status(HttpStatus.OK)
                .build();
    }
}