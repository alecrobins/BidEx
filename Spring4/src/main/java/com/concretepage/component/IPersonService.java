package com.concretepage.component;

import com.concretepage.dto.BidDTO;
import com.concretepage.dto.TokenDTO;

public interface IPersonService {
	public BidDTO getPersonDetail(Integer id);

	public void createBid();

	public String login(String id, String password);

	public String chargeToken(TokenDTO tokenDTO) throws Exception;
}
