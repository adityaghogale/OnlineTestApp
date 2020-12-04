package com.cg;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;

/**
 * 
 * @author Aditya Ghogale
 *
 */
class RegistrationTest {

	//validate registration with proper values
	@Test
	void validRegistration() {
		//creating user object to save
		User tmpUser=new User(101,"adi","adi","adi@gmail.com",0,true);
		
		//creating mock of service
		RegistrationController tmpCredentials= mock(RegistrationController.class);
		
		when(tmpCredentials.registerUser(tmpUser)).thenReturn(tmpUser);
		
		RegistrationTestProvider tmpReg=new RegistrationTestProvider(tmpCredentials);
		User result=tmpReg.getDataSupplier().registerUser(tmpUser);
		
		//validate expected and actual output
		assertEquals(101,result.getUserId());
	}

}
