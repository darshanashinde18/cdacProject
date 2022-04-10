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

import com.app.daos.PerformanceRepository;
import com.app.pojos.Employee;
import com.app.pojos.Performance;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class PerformanceController {
	@Autowired
	private PerformanceRepository pRepo;

	@GetMapping("/performances")
	public List<Performance> getAllPerformances() {
		return pRepo.findAll();
	}

	@GetMapping("/performances/{id}")
	public Performance getPerformanceById(@PathVariable Integer id) {
		return pRepo.findById(id).get();
	}
	
	@PostMapping("/performances")
	public Performance savePerformancesDetails(@RequestBody Performance performance) {
		return pRepo.save(performance);
	}
	
	@PutMapping("/performances")
	public Performance updatePerformance(@RequestBody Performance performance) {
		return pRepo.save(performance);
	}
	
	@DeleteMapping("/performances/{id}")
	public ResponseEntity<HttpStatus> deletePerformanceById(@PathVariable Integer id) {
		pRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
