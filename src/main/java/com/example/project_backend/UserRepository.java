package com.example.project_backend;

import com.example.project_backend.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query
    Optional<User> findByUsername(String username);
}
