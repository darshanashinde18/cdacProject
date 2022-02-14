package dao;

import java.util.List;

import pojos.AdharCard;
import pojos.EducationalQualifications;
import pojos.Employee;
import pojos.MobileNo;

public interface IEmployeeDao {

	// add a new mwthod for employee admission
	String admitNewEmployee(String departmentName, Employee e);
	
	//add a method to add adhar details,address and education details of the existing employee
	String insertCompleteEmployeeDetails(String email,pojos.Address a,AdharCard card,List<EducationalQualifications> qualifications,MobileNo no);
}
