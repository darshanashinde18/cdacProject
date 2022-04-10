package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.User;

public interface UserDao extends JpaRepository<User, Integer> {
	User findById(int id);
	User findByEmail(String email);
	@Modifying
	@Query("UPDATE User u SET u.isActive = ?2 WHERE u.id = ?1")
	int updateActive(int id, int active);
}
