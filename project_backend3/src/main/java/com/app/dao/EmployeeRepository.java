package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
	//all employees working for the same dept
	List<Employee> findByChosenDepartmentId(int deptId);

}
