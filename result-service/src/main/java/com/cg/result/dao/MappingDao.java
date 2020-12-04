package com.cg.result.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.result.entity.Mapping;
import com.cg.result.entity.Test;

public interface MappingDao extends JpaRepository<Mapping, Integer> {
	
	public List<Mapping> findByTestId(Integer srNo);

}


