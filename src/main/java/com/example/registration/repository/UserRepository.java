package com.example.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.registration.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
