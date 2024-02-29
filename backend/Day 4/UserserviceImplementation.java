package com.event.kaushik.service.ServiceImplementation;


import org.springframework.stereotype.Service;

import com.event.kaushik.DTO.UserDto;
import com.event.kaushik.Entity.Appuser;
import com.event.kaushik.repository.UserRepo;
import com.event.kaushik.service.UserService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class UserserviceImplementation implements UserService {
    private UserRepo userRepo;

    @Override
    public void createEvent(UserDto userdto)
    {
        Appuser appuser = new Appuser();
        appuser.setId(userdto.getId());
        appuser.setUsername(userdto.getUsername());
        appuser.setPassword(userdto.getPassword());
       
        userRepo.save(appuser);


    }
    

    

    
}
