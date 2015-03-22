package com.concretepage.dto;

public class CardDTO {
	private String cardEntryMode;
	private long dateCreated;
	private int expMonth;
	private int expYear;
	private String id;
	private String last4;
	private String type;

	public String getCardEntryMode() {
		return cardEntryMode;
	}

	public void setCardEntryMode(String cardEntryMode) {
		this.cardEntryMode = cardEntryMode;
	}

	public long getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(long dateCreated) {
		this.dateCreated = dateCreated;
	}

	public int getExpMonth() {
		return expMonth;
	}

	public void setExpMonth(int expMonth) {
		this.expMonth = expMonth;
	}

	public int getExpYear() {
		return expYear;
	}

	public void setExpYear(int expYear) {
		this.expYear = expYear;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getLast4() {
		return last4;
	}

	public void setLast4(String last4) {
		this.last4 = last4;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
