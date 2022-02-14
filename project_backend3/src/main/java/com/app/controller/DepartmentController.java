package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Department;
import com.app.service.IDepartmentService;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
	@Autowired
	private IDepartmentService departmentService;
	
	public DepartmentController() {
		System.out.println("in ctor of "+getClass());
	}
	
	
}
