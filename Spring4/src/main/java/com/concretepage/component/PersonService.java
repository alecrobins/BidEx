package com.concretepage.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.concretepage.dto.BidDTO;
import com.concretepage.entities.Bid;
import com.concretepage.repositories.BidRepositories;

@Component
public class PersonService implements IPersonService {

	@Autowired
	private BidRepositories bidRepositories;

	@Override
	public BidDTO getPersonDetail(Integer id) {
		BidDTO p = new BidDTO();
		Bid b = bidRepositories.getAllUsers().get(0);
		p.setAmount(b.getAmount());
		p.setBidTime(b.getBidTime());
		p.setKey(b.getKey());
		return p;
	}

	public void createBid() {
		bidRepositories.createBid();
	}

	public String login(String id, String password) {
		return bidRepositories.login(id, password);
	}
}
