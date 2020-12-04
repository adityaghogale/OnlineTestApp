package com.cg;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * 
 * @author Aditya Ghogale
 *
 */

//feign and ribbon client to provide details of service for communication
@FeignClient(name="logindataprovider")
@RibbonClient(name="logindataprovider")
public interface RegistartionServiceProxy {
	
	//method that will communicate with controller method at data provider
	@PostMapping("/register")
	public User registerUser(@RequestBody User user);
}
