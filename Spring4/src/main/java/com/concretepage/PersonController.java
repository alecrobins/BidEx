package com.concretepage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.concretepage.component.IPersonService;
import com.concretepage.dto.BidDTO;

@RestController
@RequestMapping("/data")
public class PersonController {
	@Autowired
	private IPersonService personService;

	@RequestMapping("/person")
	public BidDTO getPersonDetail(
			@RequestParam(value = "id", required = false, defaultValue = "0") Integer id) {
		BidDTO p = personService.getPersonDetail(id);
		return p;
	}
}