package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.entity.User;
import com.example.springapp.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(User user) {
        // You might want to add validation and other checks here
        return userRepository.save(user);
    }

    @Override
    public User findByEmailId(String emailId) {
        return userRepository.findByEmailId(emailId);
    }

    @Override
    public User findByEmailIdAndPassword(String emailId, String password) {
        return userRepository.findByEmailIdAndPassword(emailId, password);
    }
    
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public boolean updateUser(Long id, User updatedUser) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            // Update the fields of the existing user with the values from updatedUser
            existingUser.setEmailId(updatedUser.getEmailId());
            existingUser.setPassword(updatedUser.getPassword());
            // Add other fields as needed
            userRepository.save(existingUser);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
