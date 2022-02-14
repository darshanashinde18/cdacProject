package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.EmployeeRepository;
import com.app.pojos.EducationalQualifications;
import com.app.pojos.Employee;
import com.app.service.IEmployeeService;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
	@Autowired
	private IEmployeeService employeeService;

	@Autowired
	private EmployeeRepository employeeRepo;
	public EmployeeController() {
		System.out.println("in ctor of " + getClass());
	}

	@GetMapping
	public List<Employee> getAllEmpDetails() {
		System.out.println("in get all emps");
		List<Employee> employeeList=(List<Employee>)
				employeeService.findAll();
		return employeeList;
		//return employeeService.getAllEmployees();
	}

	// add req handling method to get selected emp details by emp Id
	@GetMapping("/{empid}")
	public ResponseEntity<?> fetchEmpDetails(@PathVariable int empid) {
		System.out.println("in get emp details by id");
		try {
			return new ResponseEntity<>(employeeService.fetchEmpDetails(empid), HttpStatus.OK);

		} catch (RuntimeException e) {

			System.out.println("err in get emp dtls " + e);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	
	
		//add request handling method to get all employees working in same dept
		@GetMapping("/department/{deptId}")
		public ResponseEntity<?> getAllEmployeesByDepartmentId(@PathVariable int deptId){
			System.out.println("in get emp details by dept id");
			try {
				List<Employee> employees =employeeRepo.findByChosenDepartmentId(deptId);
				return new ResponseEntity<>(employees,HttpStatus.OK);
			}catch (RuntimeException e) {

				System.out.println("err in get emp dtls " + e);
				return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
			}
		}
		
		
		
		
		
}
