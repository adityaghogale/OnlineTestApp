package com.cg.result.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.result.dao.QuestionDao;
import com.cg.result.entity.Question;

@Service
public class QuestionService {
	
	@Autowired
	private QuestionDao questionDao;
	
	public Optional<Question> findById(int id) {
		return questionDao.findById(id);
	}

	public void addQuestion(Question question) {
		this.questionDao.save(question);
	}
	
	public void updateQuestion(Question question) {
		this.questionDao.save(question);
	}
	
	public void deleteQuestionById(int id) {
		this.questionDao.deleteById(id);
	}
}
