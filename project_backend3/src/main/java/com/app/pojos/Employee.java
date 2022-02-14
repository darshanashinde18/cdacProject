package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

//many side of the asso, child side,owning side(will contain foreign key)

@Entity
@Table(name="employees_tbl")
public class Employee extends BaseEntity{//child side//owning side
	@Column(length=20,name = "first_name")
	private String firstName;
	@Column(length=20,name = "middle_name")
	private String middleName;
	@Column(length=20,name = "last_name")
	private String lastName;
	@Column(length=20,unique = true)
	private String email;
	@Column(length=20,nullable = false)
	private String password;
	@Column(length=20,nullable = false)
	private Role role;
	@Column(length=20)
	private String gender;
	@Column(name = "date_of_birth")
	private LocalDate dateOfBirth;
	@Column(name = "join_date")
	private LocalDate joinDate;
	private double salary;
	@Column(length = 50)
	private String performance;
	
	//what should be the additional prop for mapping? a bi -dir association so that one can 
	//find out chosen details of student
	//course 1<-----* student
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "department_id",nullable = false)//change name of foreign key and non null column
		private Department chosenDepartment;//one student 1course
		//Entity to Value type
		@Embedded //optional, added only for understanding
	private AdharCard card;
//	
	@Embedded //optional, added only for understanding
	private MobileNo mobileNo;
//	
	//@JsonIgnore
	@ElementCollection(fetch = FetchType.EAGER)//mandatory
    @CollectionTable(name = "employee_qualifications",joinColumns = @JoinColumn(name="emp_id"))
    private List<EducationalQualifications> qualifications=new ArrayList<EducationalQualifications>();
    
    
	
	public Employee() {
		// TODO Auto-generated constructor stub
	}

	public Employee(String firstName, String middleName, String lastName, String email, String password, Role role,
			String gender, LocalDate dateOfBirth, LocalDate joinDate, double salary, String performance) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.joinDate = joinDate;
		this.salary = salary;
		this.performance = performance;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public LocalDate getJoinDate() {
		return joinDate;
	}

	public void setJoinDate(LocalDate joinDate) {
		this.joinDate = joinDate;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getPerformance() {
		return performance;
	}

	public void setPerformance(String performance) {
		this.performance = performance;
	}
	
	

	public Department getChosenDepartment() {
		return chosenDepartment;
	}

	public void setChosenDepartment(Department chosenDepartment) {
		this.chosenDepartment = chosenDepartment;
	}

	public AdharCard getCard() {
		return card;
	}

	public void setCard(AdharCard card) {
		this.card = card;
	}

	public MobileNo getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(MobileNo mobileNo) {
		this.mobileNo = mobileNo;
	}

	public List<EducationalQualifications> getQualifications() {
		return qualifications;
	}

	public void setQualifications(List<EducationalQualifications> qualifications) {
		this.qualifications = qualifications;
	}

	@Override
	public String toString() {
		return "Employee [firstName=" + firstName + ", middleName=" + middleName + ", lastName=" + lastName + ", email="
				+ email + ", password=" + password + ", role=" + role + ", gender=" + gender + ", dateOfBirth="
				+ dateOfBirth + ", joinDate=" + joinDate + ", salary=" + salary + ", performance=" + performance + "]";
	}
	
	
	
	
	
	

}
