package com.event.kaushik.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.kaushik.Entity.Event;

public interface EventRepo extends JpaRepository <Event,Integer>{
    
}
