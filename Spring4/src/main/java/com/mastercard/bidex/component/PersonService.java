package com.mastercard.bidex.component;

import org.springframework.stereotype.Component;

import com.mastercard.bidex.controller.Person;

@Component
public class PersonService implements IPersonService {
	@Override
	public Person getPersonDetail(Integer id){
		Person p = new Person();
		p.setId(id);
		p.setLocation("Varanasi");
		p.setName("Ram");
		return p;
	}
}
