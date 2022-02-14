package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "department_tbl")
public class Department extends BaseEntity {// parent side non owning side
	@Column(length = 30, unique = true, name = "department_name")
	private String departmentName;
	@JsonIgnore
	@OneToMany(mappedBy = "chosenDepartment", cascade = CascadeType.ALL, orphanRemoval = true/*
																								 * ,fetch =
																								 * FetchType.EAGER
																								 */) // cascades
																										// all(save,update,delete)
																										// operations
																										// from parent
																										// to child

	private List<Employee> employees = new ArrayList<>();// one to many always init collection to empty collection
	// 1 department many employees

	public Department() {
		// TODO Auto-generated constructor stub
	}

	public Department(String departmentName) {
		super();
		this.departmentName = departmentName;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public List<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}

	public void addEmployee(Employee e) {
		// add emp ref in the dept
		employees.add(e);// department--> employee

		// assign dept ref to emp
		e.setChosenDepartment(this);
	}

	public void removeEmployee(Employee e) {
		// remove employee from the department
		employees.remove(e);
		// remove department from employee details
		e.setChosenDepartment(null);
	}

	@Override
	public String toString() {
		return "Department Id " + getId() + " [departmentName=" + departmentName + "]";
	}

}
