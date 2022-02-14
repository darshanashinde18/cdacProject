package tester;

import static utils.HibernateUtils.getFactory;

import java.util.Scanner;

import org.hibernate.SessionFactory;

import dao.DepartmentDaoImpl;
import pojos.Department;

public class LaunchNewDepartment {

	public static void main(String[] args) {
		try (SessionFactory sf = getFactory(); Scanner sc = new Scanner(System.in)) {
			System.out.println("hibernate up n running !" + sf);
			DepartmentDaoImpl dao=new DepartmentDaoImpl();
			
			System.out.println("Enter new department name");
			Department d=new Department(sc.next());
			
			System.out.println(dao.launchNewDepartment(d));
		} // sf.close() => close conn pool : clean up !
		catch (Exception e) {
			e.printStackTrace();
		}

	}

}
