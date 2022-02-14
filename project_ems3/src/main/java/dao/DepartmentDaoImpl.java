package dao;

import static utils.HibernateUtils.getFactory;

import org.hibernate.Session;
import org.hibernate.Transaction;

import pojos.Department;

public class DepartmentDaoImpl implements IDepartmentDao{


	@Override
	public String launchNewDepartment(Department transientDepartment) {
		Session session=getFactory().getCurrentSession();
		Transaction tx=session.beginTransaction();
		try {
			
			session.persist(transientDepartment);
			tx.commit();
		}catch (RuntimeException e) {
			
			if(tx!=null)//if transaction was made
				tx.rollback();
			throw e;
		}
		return "Launched new Department with Id"+transientDepartment.getId();
	}

	
	
	
	
	

}
