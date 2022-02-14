package com.app.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.app.pojos.Address;
import com.app.pojos.Employee;

@Component
public interface IEmployeeService {
	//all emp details
	//List<Employee> getAllEmployees();
	List<Employee> findAll();
	
	//emp details based on id
	Employee fetchEmpDetails(int empid);
	
	
	
	
	
	

}
