package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Leave;

@Repository
public interface LeaveRepository extends JpaRepository<Leave, Integer>{

}
