package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
