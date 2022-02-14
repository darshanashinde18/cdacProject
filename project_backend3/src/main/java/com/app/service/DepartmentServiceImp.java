package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DepartmentRepository;
import com.app.pojos.Department;
@Service
@Transactional
public class DepartmentServiceImp implements IDepartmentService {

	@Autowired
	private DepartmentRepository departmentRepo;
	
	@Override
	public List<Department> getAllDepartment() {
		
		return departmentRepo.findAll();
	}

}
