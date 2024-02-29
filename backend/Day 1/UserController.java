package com.agricultureloan.agricultureloan.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agricultureloan.agricultureloan.dto.UserDto;
import com.agricultureloan.agricultureloan.Service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService UserService;
    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto savedUser=UserService.createUser(userDto);
        return new ResponseEntity<>(savedUser,HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<UserDto>getUserId(@PathVariable("id")Long userId ) {
      UserDto userDto=UserService.getUserById(userId);
      return ResponseEntity.ok(userDto);
    }
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users=UserService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    
}
