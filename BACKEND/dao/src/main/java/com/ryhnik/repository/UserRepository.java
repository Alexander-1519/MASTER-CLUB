package com.ryhnik.repository;

import com.ryhnik.entity.Master;
import com.ryhnik.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    boolean existsByEmailAndUsername(String email, String username);

    Optional<User> findByEmail(String email);
}
