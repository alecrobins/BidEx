package com.concretepage.component;

import com.concretepage.dto.BidDTO;

public interface IPersonService {
	public BidDTO getPersonDetail(Integer id);

	public void createBid();

	public String login(String id, String password);
}
