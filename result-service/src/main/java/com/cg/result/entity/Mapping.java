package com.cg.result.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "Map")
public class Mapping {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer srNo;

	public Mapping(Integer srNo, Integer testId, Integer queId) {
		super();
		this.srNo = srNo;
		this.testId = testId;
		this.queId = queId;
	}
	
	public Mapping() {
		
	}

	public Integer getSrNo() {
		return srNo;
	}

	public void setSrNo(Integer srNo) {
		this.srNo = srNo;
	}

	@Column
	private Integer testId;
	
	@Column
	private Integer queId;

	public Integer getTestId() {
		return testId;
	}

	public void setTestId(Integer testId) {
		this.testId = testId;
	}

	public Integer getQueId() {
		return queId;
	}

	public void setQueId(Integer queId) {
		this.queId = queId;
	}

	@Override
	public String toString() {
		return "Mapping [srNo=" + srNo + ", testId=" + testId + ", queId=" + queId + "]";
	}
	
	
	
	
	
	

}
