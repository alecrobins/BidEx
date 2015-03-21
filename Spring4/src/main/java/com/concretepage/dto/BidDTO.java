package com.concretepage.dto;

import java.util.Date;

public class BidDTO {
	private int key;
	private Date bidTime;
	private int amount;

	public BidDTO() {

	}

	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	public Date getBidTime() {
		return bidTime;
	}

	public void setBidTime(Date bidTime) {
		this.bidTime = bidTime;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

}