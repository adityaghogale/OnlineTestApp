package com.cg.questionmicroservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.cg.questionmicroservice.entity.Question;
import com.cg.questionmicroservice.service.QuestionService;
import com.cg.questionmicroservice.service.QuestionServiceTestProvider;

class QuestionTest {

	@Test
	public void testAddQuestion() {
		QuestionService serviceProvider =mock(QuestionService.class);
		Question entity=new Question(11, "A", "B", "B", "D", "ABCD", 2, 1, 0);
		when(serviceProvider.addQuestion(entity)).thenReturn(entity);
		QuestionServiceTestProvider testProvider=new QuestionServiceTestProvider(serviceProvider);
		Question tmpQue=testProvider.getDataService().addQuestion(entity);
		assertEquals(entity,tmpQue);
	}
	
	@Test
	public void  testUpdateQuestion() {
		QuestionService serviceProvider =mock(QuestionService.class);
		Question entity=new Question(11, "A", "C", "D", "B", "CDBA", 2, 1, 0);
		when(serviceProvider.updateQuestion(entity)).thenReturn(entity);
		QuestionServiceTestProvider testProvider=new QuestionServiceTestProvider(serviceProvider);
		Question tmpQue=testProvider.getDataService().updateQuestion(entity);
		assertEquals(entity,tmpQue);
	}
	
	@Test
	public void testGetQuestion() {
		QuestionService serviceProvider =mock(QuestionService.class);
		Question entity=new Question(11, "A", "C", "D", "B", "CDBA", 2, 1, 0);
		when(serviceProvider.getQuestionById(11)).thenReturn(entity);
		QuestionServiceTestProvider testProvider=new QuestionServiceTestProvider(serviceProvider);
		Question tmpQue=testProvider.getDataService().getQuestionById(11);
		assertEquals(entity,tmpQue);
	}
	
	@Test
	public void tetsGetAllQuestion() {
		QuestionService serviceProvider =mock(QuestionService.class);
		List<Question> tmpQueList=new ArrayList<>();
		tmpQueList.add(new Question(11, "A", "C", "D", "B", "CDBA", 2, 1, 0));
		tmpQueList.add(new Question(22, "A", "C", "D", "B", "CDBA", 2, 1, 0));
		when(serviceProvider.getAllQuestions()).thenReturn(tmpQueList);
		QuestionServiceTestProvider testProvider=new QuestionServiceTestProvider(serviceProvider);
		List<Question> fetchedQueList=testProvider.getDataService().getAllQuestions();
		assertEquals(tmpQueList,fetchedQueList);
	}
	

}
