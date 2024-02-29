package com.agricultureloan.agricultureloan.Service;


import java.util.List;

import com.agricultureloan.agricultureloan.dto.UserDto;

public interface UserService {
    UserDto createUser(UserDto userDto);
    UserDto getUserById(Long userId);
    List<UserDto> getAllUsers();
    
}
