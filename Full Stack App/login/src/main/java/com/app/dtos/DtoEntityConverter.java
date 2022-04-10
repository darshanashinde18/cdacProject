package com.app.dtos;

import org.springframework.stereotype.Component;

import com.app.pojos.User;

@Component
public class DtoEntityConverter {
	public UserDTO toUserDto(User entity) {
		UserDTO dto = new UserDTO();
		dto.setId(entity.getId());
		dto.setFirstName(entity.getFirstName());
		dto.setLastName(entity.getLastName());
		dto.setEmail(entity.getEmail());
		dto.setPassword(entity.getPassword());
		return dto;
	}

	public User toUserEntity(UserDTO dto) {
		User entity = new User();
		entity.setId(dto.getId());
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		return entity;		
	}
	
}