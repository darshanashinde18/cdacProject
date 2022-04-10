package com.app.controllers;

import java.util.List;
import java.util.stream.Stream;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.Credentials;
import com.app.dtos.UserDTO;
import com.app.services.UserServiceImpl;
import com.app.dtos.Response;

@CrossOrigin(origins = "*")
@RestController
public class UserControllerImpl {
	@Autowired
	private UserServiceImpl userService;
	
	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@Valid @RequestBody Credentials cred) {
		UserDTO userDto = userService.findUserByEmailAndPassword(cred);
		if(userDto == null)
			return Response.error("user not found");
		return Response.success(userDto);
	}
	
	@PostMapping("/user/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDTO userDto) {
		UserDTO result = userService.saveUser(userDto);
		return Response.success(result);
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class) 
	public ResponseEntity<?> emailExistsHandler(DataIntegrityViolationException ex)	{
		return Response.error(ex.getMessage());
	}
}

