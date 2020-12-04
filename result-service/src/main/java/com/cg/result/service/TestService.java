package com.cg.result.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.cg.result.dao.MappingDao;
import com.cg.result.dao.QuestionDao;
import com.cg.result.dao.TestDao;
import com.cg.result.dao.UserDao;
import com.cg.result.entity.Mapping;
import com.cg.result.entity.Question;
import com.cg.result.entity.Test;
import com.cg.result.entity.User;

@Service
public class TestService {
	
	Test test;
	Question que;
	
	@Autowired
	private TestDao testDao;
	
	@Autowired
	private UserDao userDao;
	@Autowired
	private MappingDao mapDao;
	private QuestionDao queDao;
	
	
	public Test addTest(Test test) {
		return this.testDao.save(test);
	}

	public Test updateTest(Test test) {
		return this.testDao.save(test);
	}
	
	public void deleteTestbyId(int id) {
		this.testDao.deleteById(id);
	}
	
	public User assignTest(int userId, int testId) {
		 this.userDao.findById(userId).orElse(null).setTestId(testId);
		 return userDao.findById(userId).orElse(null);
	}
	
	public void addMapping(Mapping map) {
		 this.mapDao.save(map);
		
	}
	
	public void updateMap(Integer testId,Integer queId) {
		
		List<Mapping> list=new ArrayList<Mapping>();
		list= this.mapDao.findByTestId(testId);
		
		for (Mapping mapping : list) {
			if(mapping.getQueId()==queId) {
				
				mapping.setQueId(queId);
				
				
			}
			
		}
		
		this.mapDao.saveAll(list);
		
	}
	
	public void deleteMap(Integer testId,Integer queId) {
		
		List<Mapping> list=new ArrayList<Mapping>();
		list= this.mapDao.findByTestId(testId);
		
		this.mapDao.deleteAll(list);
		
		
		
	}
	
	
	public List<Mapping> fetchAllTest(Integer srNo){
		return this.mapDao.findByTestId(srNo);
	}
	
	public List<Mapping> fetchAll(){
		return this.mapDao.findAll();
	}
	
	public List<Question> fetchAllQuestion(){
		return this.queDao.findAll();
	}
	
	
	public List<Mapping> fetchTestQuestions(Integer testId){
		return this.mapDao.findByTestId(testId);
	}
	
	public List<Mapping> fetchQuestion(int srNo){
		return this.mapDao.findByTestId(srNo);
	}
	
}
