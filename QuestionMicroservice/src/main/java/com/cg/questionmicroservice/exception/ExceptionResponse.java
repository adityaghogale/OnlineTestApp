package com.cg.questionmicroservice.exception;

import org.springframework.stereotype.Component;

@Component
public class ExceptionResponse {

	private int code;
	private String errorMessage;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
}
