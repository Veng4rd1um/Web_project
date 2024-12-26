package com.example.project_backend;

import com.example.project_backend.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserService userService;

    // Эндпоинт для авторизации
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");

        if (userService.login(username, password)) {
            return ResponseEntity.ok("Login successful");
        }

        Map<String, String> response = new HashMap<>();
        response.put("message", "Invalid username or password");
        return ResponseEntity.badRequest().body(response);
    }

    // Эндпоинт для регистрации
    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");

        if (userService.register(username, password)) {
            return ResponseEntity.ok("Registration successful");
        }

        Map<String, String> response = new HashMap<>();
        response.put("message", "Username already exists");
        return ResponseEntity.badRequest().body(response);
    }
}
