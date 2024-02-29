package com.event.kaushik.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.kaushik.Entity.Admin;



public interface AdminRepo extends JpaRepository <Admin,Integer>{
    
}
