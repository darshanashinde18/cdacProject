package tester;

import static utils.HibernateUtils.getFactory;

import java.time.LocalDate;
import java.util.Scanner;

import org.hibernate.SessionFactory;

import dao.EmployeeDaoImpl;
import pojos.Employee;
import pojos.Role;
public class EmployeeAdmission {
	public static void main(String[] args) {
		try (SessionFactory sf = getFactory(); Scanner sc = new Scanner(System.in)) {
			System.out.println("hibernate up n running !" + sf);
			EmployeeDaoImpl employeeDao=new EmployeeDaoImpl();
			System.out.println("Enter department, first,middle,last name,email,password,role,gender,date of birth(yy-mm-dd),join date,salary,performance");
			System.out.println(employeeDao.admitNewEmployee(sc.next(),new Employee(sc.next(), sc.next(), sc.next(), sc.next(), sc.next(), Role.valueOf(sc.next().toUpperCase()), sc.next(), LocalDate.parse(sc.next()), LocalDate.parse(sc.next()), sc.nextDouble(), sc.next())));
			
			
		} // sf.close() => close conn pool : clean up !
		catch (Exception e) {
			e.printStackTrace();
		}

	}

}
