package com.cg.result.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.result.entity.Question;

public interface QuestionDao extends JpaRepository<Question, Integer> {

}
