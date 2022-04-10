package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.UserDao;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.UserDTO;
import com.app.pojos.User;
import com.app.dtos.Credentials;


@Transactional
@Service
public class UserServiceImpl {
	@Autowired
	private UserDao userDao;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private DtoEntityConverter converter;
	
	public UserDTO findUserById(int userId) {
		User user = userDao.findById(userId);
		return converter.toUserDto(user);
	}
	
	public UserDTO findUserByEmail(String email) {
		User user = userDao.findByEmail(email);
		return converter.toUserDto(user);
	}
	
	public UserDTO findUserByEmailAndPassword(Credentials cred) {
		User dbUser = userDao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(dbUser != null && passwordEncoder.matches(rawPassword, dbUser.getPassword())) {
			UserDTO result = converter.toUserDto(dbUser);
			result.setPassword("********");
			return result;
		}
		return null;
	}
	
	public UserDTO saveUser(UserDTO userDto) {
		String rawPassword = userDto.getPassword();
		String encPassword = passwordEncoder.encode(rawPassword);
		userDto.setPassword(encPassword);
		User user = converter.toUserEntity(userDto);
		user = userDao.save(user);
		userDto = converter.toUserDto(user);
		userDto.setPassword("*******");
		return userDto;
	}
}





