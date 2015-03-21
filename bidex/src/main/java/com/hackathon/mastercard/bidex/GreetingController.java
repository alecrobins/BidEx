package com.hackathon.mastercard.bidex;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greeting")
public class GreetingController {

	private static final String template = "Hello, %s!";

	@RequestMapping(value = "/abc", method = RequestMethod.GET)
	public Greeting greeting(@PathVariable String name) {
		return new Greeting(1, String.format(template, "World"));
	}
}