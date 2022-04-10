package com.app.pojos;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "leave_tbl")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class Leave {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	@Column(length = 30)
	private String name;
	@Column(length = 30)
	private String lastName;
	@Column(name = "start_date")
	//@JsonFormat(pattern="dd-MM-yyyy")
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private Date startDate;
	@Column(name = "end_date")
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private Date endDate;
	private String reason;
	
}
