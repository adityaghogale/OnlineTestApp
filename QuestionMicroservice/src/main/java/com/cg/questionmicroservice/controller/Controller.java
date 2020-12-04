package com.cg.questionmicroservice.controller;

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

import com.cg.questionmicroservice.entity.Question;
import com.cg.questionmicroservice.exception.CustomException;
import com.cg.questionmicroservice.service.QuestionService;
//import com.example.demo.entity.Mapping;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials = "false")
@RestController
@RequestMapping("")
public class Controller {

	@Autowired
	public QuestionService service;

	
	@ApiOperation(value = "getQuestion", nickname = "getQuestion")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success", response = Question.class),
	@ApiResponse(code = 500, message = "Failure", response = Question.class) })
	@GetMapping("/getById/{questionId}")
	public ResponseEntity<Question> getQuestion(@PathVariable int questionId) {
		Question tempQuestion= null;
		tempQuestion= service.getQuestionById(questionId);
		return new ResponseEntity<Question>(tempQuestion, HttpStatus.OK);
	}

	@GetMapping("/getAll")
	public List<Question> getAllQuestion(){
		return service.getAllQuestions();
	}

	@PostMapping("/addQuestion")
	public Question addQuestion(@RequestBody Question question) {
		return service.addQuestion(question);
	}

	@PutMapping("/updateQuestion")
	public Question updateQuestion(@RequestBody Question question) {
		return service.updateQuestion(question);
	}

	@DeleteMapping("/deleteQuestion/{questionId}")
	public String deleteById(@PathVariable Integer questionId){
		service.deleteById(questionId);
		return "QuetionDeleted";
	}
}
