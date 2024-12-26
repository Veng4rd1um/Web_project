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

        System.out.println("Received login request: username=" + username + ", password=" + password);

        if (userService.login(username, password)) {
            return ResponseEntity.ok(Map.of("message", "Login successful"));

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

        System.out.println("Received signup request: username=" + username + ", password=" + password);

        if (username == null || username.isEmpty() || password == null || password.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Username and password are required"));
        }

        if (userService.register(username, password)) {
            return ResponseEntity.ok(Map.of("message", "Registration successful"));

        } else {
            return ResponseEntity.badRequest().body(Map.of("message", "Username already exists"));
        }
    }

}
