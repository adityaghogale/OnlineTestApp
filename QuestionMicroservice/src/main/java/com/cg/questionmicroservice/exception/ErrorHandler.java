package com.cg.questionmicroservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ErrorHandler {

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ExceptionResponse> generalException(Exception e) throws Exception{
		ExceptionResponse error = new ExceptionResponse();
		error.setCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
		error.setErrorMessage(e.getMessage());
		return new ResponseEntity<ExceptionResponse>(error, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(CustomException.class)
	public ResponseEntity<ExceptionResponse> customException(Exception e) throws Exception{
		ExceptionResponse error = new ExceptionResponse();
		error.setCode(HttpStatus.BAD_REQUEST.value());
		error.setErrorMessage(e.getMessage());
		return new ResponseEntity<ExceptionResponse>(error, HttpStatus.BAD_REQUEST);
	}
}
