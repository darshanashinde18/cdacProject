package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.daos.LeaveRepository;
import com.app.pojos.Employee;
import com.app.pojos.Leave;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class LeaveController {
	@Autowired
	private LeaveRepository lRepo;
	
	@GetMapping("/leaves")
	public List<Leave> getAllLeaves() {
		return lRepo.findAll();
	}
 
	@GetMapping("/leaves/{id}")
	public Leave getLeaveById(@PathVariable Integer id) {
		return lRepo.findById(id).get();
	}
	
	@PostMapping("/leaves")
	public Leave saveLeaveDetails(@RequestBody Leave leave) {
		return lRepo.save(leave);
	}
	
	@PutMapping("/leaves")
	public Leave updateLeave(@RequestBody Leave leave) {
		return lRepo.save(leave);
	}
	
	@DeleteMapping("/leaves/{id}")
	public ResponseEntity<HttpStatus> deleteLeaveById(@PathVariable Integer id) {
		lRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
}
