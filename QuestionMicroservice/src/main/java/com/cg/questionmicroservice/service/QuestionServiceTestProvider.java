package com.cg.questionmicroservice.service;

public class QuestionServiceTestProvider {

	private QuestionService dataService;

	public QuestionService getDataService() {
		return dataService;
	}

	public void setDataService(QuestionService dataService) {
		this.dataService = dataService;
	}

	public QuestionServiceTestProvider(QuestionService dataService) {
		super();
		this.dataService = dataService;
	}
	
	
}
