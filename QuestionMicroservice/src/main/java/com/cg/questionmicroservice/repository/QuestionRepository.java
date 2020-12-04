package com.cg.questionmicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.questionmicroservice.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

}
