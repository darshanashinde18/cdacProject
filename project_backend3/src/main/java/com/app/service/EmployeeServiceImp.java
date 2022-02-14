package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.EmployeeRepository;
import com.app.pojos.Employee;
@Service
@Transactional
public class EmployeeServiceImp implements IEmployeeService {

	@Autowired
	private EmployeeRepository employeeRepo;
	
	
	
		
	@Override
	public List<Employee> findAll() {
		// TODO Auto-generated method stub
		//return employeeRepo.findAll();
		List<Employee> employeeList=(List<Employee>)
				employeeRepo.findAll();
		return employeeList;
	}



	@Override
	public Employee fetchEmpDetails(int empid) {
	
		return employeeRepo.findById(empid).orElseThrow(()-> new ResourceNotFoundException("Employee by ID "+empid +" not found !!!"));
	}



	//@Override
	/*
	 * public Employee addOrUpdateEmployeeDetails(Employee transientEmp) { // TODO
	 * Auto-generated method stub return employeeRepo.save(transientEmp); }
	 */
	





	


	
	
	

	
	
	
	

}
