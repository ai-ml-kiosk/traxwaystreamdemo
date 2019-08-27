package com.testSpring.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class TestController {

	 @RequestMapping(value = "/view")
	    public String login(Map<String, Object> model) {

	        return "/viewer";
	    }
	
	
}
