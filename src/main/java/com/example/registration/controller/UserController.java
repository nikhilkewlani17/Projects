package com.example.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.registration.entity.User;
import com.example.registration.repository.UserRepository;

@Controller
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/")
	public String home(Model model) {
        model.addAttribute("users", userRepository.findAll());
        model.addAttribute("users", new User());
        return "index";
}
	
	@PostMapping("/register")
	public String registerUser(@ModelAttribute User user) {
		userRepository.save(user);
		return "redirect:/";
	}
}
