package com.concretepage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.concretepage.component.IPersonService;
import com.concretepage.dto.BidDTO;
import com.concretepage.dto.LoginDTO;

@RestController
@RequestMapping("/data")
public class PersonController {
	@Autowired
	private IPersonService personService;

	@RequestMapping("/getBid")
	public BidDTO getBidDetail(
			@RequestParam(value = "id", required = false, defaultValue = "0") Integer id) {
		BidDTO p = personService.getPersonDetail(id);
		return p;
	}

	@RequestMapping("/createBid")
	public void createBid() {
		personService.createBid();
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public LoginDTO login(@RequestBody LoginDTO loginDTOIn) {
		LoginDTO loginDTORet = new LoginDTO();
		loginDTORet.setSuccess(personService.login(loginDTOIn.getId(),
				loginDTOIn.getPassword()));
		return loginDTORet;
	}
}