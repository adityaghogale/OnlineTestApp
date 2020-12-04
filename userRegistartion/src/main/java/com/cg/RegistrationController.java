package com.cg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 
 * @author Aditya Ghogale
 *
 */

@RestController
public class RegistrationController {

	//Instance of proxy service
	@Autowired
	private RegistartionServiceProxy proxy;
	
	//method call for registration
	@PostMapping("/register")
	public User registerUser(@RequestBody User user) {
		return proxy.registerUser(user);
	}
}
