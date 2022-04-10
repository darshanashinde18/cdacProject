package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "performance_tbl")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class Performance {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	@Column(length = 30)
	private String name;
	@Column(length = 30)
	private String lastName;
	@Column(length = 30)
	private String department;

}
