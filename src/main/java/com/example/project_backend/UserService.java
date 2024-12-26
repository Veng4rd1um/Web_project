package com.example.project_backend;

import com.example.project_backend.User;
import com.example.project_backend.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // Авторизация пользователя
    public boolean login(String username, String password) {
        return userRepository.findByUsername(username)
                .map(user -> user.getPassword().equals(password)) // Проверка пароля
                .orElse(false); // Если пользователь не найден
    }

    // Регистрация пользователя
    public boolean register(String username, String password) {
        if (userRepository.findByUsername(username).isPresent()) {
            return false; // Пользователь уже существует
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        userRepository.save(user);
        return true;
    }
}
