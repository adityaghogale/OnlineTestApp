package com.cg.result.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Marks {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer srNo;
	
	private Integer testId;
	private Integer userId;
	private Integer marksScored;
	
	@Override
	public String toString() {
		return "Marks [srNo=" + srNo + ", testId=" + testId + ", userId=" + userId + ", marksScored=" + marksScored
				+ "]";
	}
	public Marks( Integer srNo ,Integer testId, Integer userId, Integer marksScored) {
		super();
		this.srNo = srNo;
		this.testId = testId;
		this.userId = userId;
		this.marksScored = marksScored;
	}
	
	public Marks() {}
	
	public Integer getSrNo() {
		return srNo;
	}
	
	public Integer getTestId() {
		return testId;
	}
	public void setTestId(Integer testId) {
		this.testId = testId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getMarksScored() {
		return marksScored;
	}
	public void setMarksScored(Integer marksScored) {
		this.marksScored = marksScored;
	}

}
