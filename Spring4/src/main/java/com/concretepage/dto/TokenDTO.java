package com.concretepage.dto;

public class TokenDTO {
	private CardDTO card;
	private String id;
	private boolean used;

	public CardDTO getCard() {
		return card;
	}

	public void setCard(CardDTO card) {
		this.card = card;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public boolean isUsed() {
		return used;
	}

	public void setUsed(boolean used) {
		this.used = used;
	}

}
