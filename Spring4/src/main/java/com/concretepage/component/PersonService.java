package com.concretepage.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.concretepage.dto.BidDTO;
import com.concretepage.dto.CardDTO;
import com.concretepage.dto.TokenDTO;
import com.concretepage.entities.Bid;
import com.concretepage.repositories.BidRepositories;
import com.simplify.payments.PaymentsApi;
import com.simplify.payments.PaymentsMap;
import com.simplify.payments.domain.Payment;

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

	public String chargeToken(TokenDTO tokenDTO) throws Exception {
		PaymentsApi.PUBLIC_KEY = "sbpb_ZjhmNmYxNGMtOThlNy00OWRmLTljMzYtZWRjMGJmZGE4Njdl";
		PaymentsApi.PRIVATE_KEY = "KychZDSxOO7RhkSXSirAbOw4O/xNS2ATM+aeKwThmcR5YFFQL0ODSXAOkNtXTToq";

		Payment payment = Payment.create(new PaymentsMap().set("amount", 1000)
				.set("currency", "HKD")
				.set("description", "payment description")
				.set("reference", "7a6ef6be31").set("token", tokenDTO.getId()));

		if ("APPROVED".equals(payment.get("paymentStatus"))) {
			return "yes";
		} else {
			return "no";
		}
	}
}
