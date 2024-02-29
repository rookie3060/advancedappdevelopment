package com.event.kaushik.service.ServiceImplementation;


import org.springframework.stereotype.Service;

import com.event.kaushik.DTO.AdminDto;
import com.event.kaushik.Entity.Admin;
import com.event.kaushik.repository.AdminRepo;
import com.event.kaushik.service.AdminService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class AdminserviceImplementation implements AdminService {
    private AdminRepo adminRepo;

    @Override
    public void createEvent(AdminDto admindto)
    {
        Admin admin = new Admin();
        admin.setId(admindto.getId());
        admin.setUserName(admindto.getUsername());
        admin.setPassword(admindto.getPassword());
        adminRepo.save(admin);


    }
    

    

    
}
