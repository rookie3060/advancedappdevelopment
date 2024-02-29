package com.agricultureloan.agricultureloan.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.agricultureloan.agricultureloan.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
    
}
