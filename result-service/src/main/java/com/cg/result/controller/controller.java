package com.cg.result.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cg.result.entity.Mapping;
import com.cg.result.entity.Marks;
import com.cg.result.entity.Question;
import com.cg.result.service.TestService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * 
 * @author Aditya
 *
 */
@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials = "false")
@RestController
@RequestMapping("/a")
public class controller {

	@Autowired
	TestService service;
	@Autowired
	RestTemplate restTemplate;

	@PostMapping(value = "/addMap")//working
	public void addProperty(@RequestBody Mapping map) {
		this.service.addMapping(map);
	}

	//	@GetMapping("/")
	//	@ResponseBody
	//	public List<Mapping> getAllProduct(){
	//		return this.service.fetchAll();
	//	}

	
	
	//working
	
	@GetMapping("/{srNo}")//it is actually test id//working
	@ResponseBody
	public List<Question> fetchAllTest(@PathVariable Integer srNo){
		Question que;

		List<Mapping> list = new ArrayList<Mapping>();
		List<Question> list1 = new ArrayList<Question>();

		list =  this.service.fetchQuestion(srNo);

		for (Mapping map : list) {

			que = new Question();

			que = restTemplate.getForObject("http://localhost:9090/getById/" + map.getQueId(), Question.class);

			list1.add(que);
		}
		return list1;
	}

	
	
	@ApiOperation(value = "calculateMarks", nickname = "calculateMarks")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success", response = Question.class),
	@ApiResponse(code = 500, message = "Failure", response = Question.class) })
	@GetMapping(value = "/setMarks/{queId}/{option}")//working
	@ResponseBody
	public Question storeAns(@PathVariable Integer queId,@PathVariable Integer option) {

		Question que;

		que = restTemplate.getForObject("http://localhost:9090/getById/" + queId, Question.class);
		que.setChoosenAnswer(option);
		restTemplate.put("http://localhost:9090/updateQuestion/",que);	
		return restTemplate.getForObject("http://localhost:9090/getById/" + queId, Question.class);
	}

	
	
	
	@GetMapping(value = "/calculateMarks/{srNo}/{userId}")//working//it is test id
	public Marks calculateMarks(@PathVariable Integer srNo, @PathVariable Integer userId) {

		Question que;
		Marks mark;
		Integer marks = 0;

		List<Mapping> list = new ArrayList<Mapping>();
		List<Question> list1 = new ArrayList<Question>();

		list = this.service.fetchQuestion(srNo);

		for (Mapping map : list) {

			que = new Question();

			que = restTemplate.getForObject("http://localhost:9090/getById/" + map.getQueId(), Question.class);

			list1.add(que);

			if (que.getQuestionAnswer() == que.getChoosenAnswer()) {

				marks++;
				que.setMarksScored(1);

			}
			//restTemplate.put("http://localhost:9090/updateQuestion/",que);
			
		}
		Marks m=restTemplate.getForObject("http://localhost:8020/c/getMarksMapping/"+ srNo + "/" + userId,Marks.class);
		m.setMarksScored(marks);
		restTemplate.put("http://localhost:8020/c/storeResult/", m);
		return restTemplate.getForObject("http://localhost:8020/c/getMarks/"+ srNo + "/" + userId,Marks.class);

	}

}