package com.app;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.daos.UserDao;
import com.app.pojos.User;

@SpringBootTest
class UserDaoTests {

	@Autowired
	private UserDao userDao;
	
	@Test
	void testFindAll() {
		List<User> list =userDao.findAll();
		list.forEach(System.out::println);
		//assertThat(list)t
	}
	
	@Test
	void testFindId() {
		User user=userDao.findById(1);
		System.out.println("Found by Id: "+user);
		//assertThat(list)t
	}
	
	
}
