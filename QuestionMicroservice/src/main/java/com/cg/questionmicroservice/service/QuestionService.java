package com.cg.questionmicroservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.questionmicroservice.entity.Question;
import com.cg.questionmicroservice.exception.CustomException;
import com.cg.questionmicroservice.repository.QuestionRepository;

@Service
public class QuestionService {

	@Autowired
	private QuestionRepository repository;
	
	public Question getQuestionById(int questionId) {
		return repository.findById(questionId).orElseThrow(()-> new CustomException("No question available for this Id. Please Enter a Valid Id"));
	}
	
	public Question addQuestion(Question question){
		if(repository.findById(question.getQuestionId()).orElse(null)!=null) {
			throw new CustomException("Question with this id is already present do you want to update that?");
		}
		return repository.save(question);
	}
	
	public List<Question> getAllQuestions(){
		if(repository.findAll()==null) {
			throw new CustomException("No question available in datbase");
		}
		return repository.findAll();
	}
	
	public void deleteById(int questionId){
		repository.findById(questionId).orElseThrow(()-> new CustomException("No question available for this Id. Please Enter a Valid Id"));
		repository.deleteById(questionId);
	}
	
	public Question updateQuestion(Question question){
		repository.findById(question.getQuestionId()).orElseThrow(()-> new CustomException("No question available for this Id. Please Enter a Valid Id"));
		return repository.save(question);
	}
}
