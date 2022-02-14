package tester;

import static utils.HibernateUtils.getFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.hibernate.SessionFactory;

import dao.EmployeeDaoImpl;
import pojos.Address;
import pojos.AdharCard;
import pojos.EduType;
import pojos.EducationalQualifications;
import pojos.MobileNo;
public class AssignCompleteEmployeeDetails {
	public static void main(String[] args) {
		try (SessionFactory sf = getFactory(); Scanner sc = new Scanner(System.in)) {
			System.out.println("hibernate up n running !" + sf);
			EmployeeDaoImpl employeeDao=new EmployeeDaoImpl();
			
			System.out.println("Enter employee email");
			String email=sc.next();
			System.out.println("enter address:house no,street,city,state,country,zip code");
			Address a=new Address(sc.next(), sc.next(), sc.next(), sc.next(), sc.next(), sc.next());
			System.out.println("enter adhar card details: number");
			AdharCard card=new AdharCard(sc.next());
			//System.out.println(studentDao.linkAdharCard(id, new AdharCard(sc.next(), LocalDate.parse(sc.next()), sc.next())));
			sc.nextLine();
			
			//qualification
			List<EducationalQualifications> quals=new ArrayList<EducationalQualifications>();
			for(int i=0;i<3;i++)
			{
				System.out.println("enter qualifications details: Edu type,year,marks");
			quals.add(new EducationalQualifications(EduType.valueOf(sc.next().toUpperCase()), sc.nextInt(), sc.nextInt()));
			}
	
			
			System.out.println(quals);
			//mobile no
			System.out.println("enter mobile no");
			MobileNo no=new MobileNo(sc.next());
			//call dao layer method to reflect same object graph
			System.out.println(employeeDao.insertCompleteEmployeeDetails(email, a, card, quals, no));
		
		} // sf.close() => close conn pool : clean up !
		catch (Exception e) {
			e.printStackTrace();
		}

	}

}
