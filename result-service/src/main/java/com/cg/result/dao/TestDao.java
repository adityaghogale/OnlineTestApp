package com.cg.result.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.result.entity.Test;

public interface TestDao extends JpaRepository<Test, Integer> {
	
}
