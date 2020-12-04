package com.cg.result.entity;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Test {
	
	@Column
	private Integer userId;
	
	@Column
	private Integer questionId;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer testIdInteger;
	
	@Column
	private String testTitle;
	
	@Column
	private Integer testDuration;
	
	@Column
	private Integer testTotalMarks;
	
	@Column
	private Integer testMarksScored;
	
	@Column
	private LocalTime startTime;
	
	@Column
	private LocalTime endTime;
	
	public Test() {
		
	}

	public Test(Integer userId, Integer questionId, Integer testIdInteger, String testTitle, Integer testDuration,
			Integer testTotalMarks, Integer testMarksScored, LocalTime startTime, LocalTime endTime) {
		this.userId = userId;
		this.questionId = questionId;
		this.testIdInteger = testIdInteger;
		this.testTitle = testTitle;
		this.testDuration = testDuration;
		this.testTotalMarks = testTotalMarks;
		this.testMarksScored = testMarksScored;
		this.startTime = startTime;
		this.endTime = endTime;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}

	public Integer getTestIdInteger() {
		return testIdInteger;
	}

	public void setTestIdInteger(Integer testIdInteger) {
		this.testIdInteger = testIdInteger;
	}

	public String getTestTitle() {
		return testTitle;
	}

	public void setTestTitle(String testTitle) {
		this.testTitle = testTitle;
	}

	public Integer getTestDuration() {
		return testDuration;
	}

	public void setTestDuration(Integer testDuration) {
		this.testDuration = testDuration;
	}

	public Integer getTestTotalMarks() {
		return testTotalMarks;
	}

	public void setTestTotalMarks(Integer testTotalMarks) {
		this.testTotalMarks = testTotalMarks;
	}

	public Integer getTestMarksScored() {
		return testMarksScored;
	}

	public void setTestMarksScored(Integer testMarksScored) {
		this.testMarksScored = testMarksScored;
	}

	public LocalTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}

	public LocalTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}
	
}
