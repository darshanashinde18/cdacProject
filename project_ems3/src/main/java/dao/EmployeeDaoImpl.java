package dao;

import static utils.HibernateUtils.getFactory;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import pojos.Address;
import pojos.AdharCard;
import pojos.Department;
import pojos.EducationalQualifications;
import pojos.Employee;
import pojos.MobileNo;

public class EmployeeDaoImpl implements IEmployeeDao {

	@Override
	public String admitNewEmployee(String departmentName, Employee emp) {
		String jpql = "select d from Department d where d.departmentName=:name";
		String mesg = "Employee admission failed";
		Session session = getFactory().getCurrentSession();
		// begin a transation
		Transaction tx = session.beginTransaction();
		try {
			// get PERSISTENT Course POJO from the course name
			Department d = session.createQuery(jpql, Department.class).setParameter("name", departmentName)
					.getSingleResult();
			d.addEmployee(emp);
			tx.commit();
			mesg = "Employee admission successful";
		} catch (RuntimeException e) {

			if (tx != null)// if transaction was made
				tx.rollback();
			throw e;
		}
		return mesg;
	}

	@Override
	public String insertCompleteEmployeeDetails(String email, Address a, AdharCard card,
			List<EducationalQualifications> qualifications,MobileNo no) {
		String mesg = "Insertion of data failed";
		String jpql = "select e from Employee e where e.email=:em";
		Session session = getFactory().getCurrentSession();
		Transaction tx = session.beginTransaction();
		try {
			Employee e = session.createQuery(jpql, Employee.class).setParameter("em", email).getSingleResult();
			a.setEmployee(e);
			session.persist(a);
			// link adhar card
			e.setCard(card);
			// link education details
			e.setQualifications(qualifications);
			//link mobile no
			e.setMobileNo(no);
			tx.commit();
			mesg = "Employee data inserted successfully";
		} catch (RuntimeException e) {

			if (tx != null)// if transaction was made
				tx.rollback();
			throw e;
		}
		return mesg;
	}

}
