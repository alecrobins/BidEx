package com.concretepage.entities;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bid")
public class Bid {
	private int key;
    private Date bidTime;
    private int amount;
    
    public Bid() {
    	
    }

    @Id
    @GeneratedValue
    @Column(name="key")
	public int getKey() {
		return key;
	}
	public void setKey(int key) {
		this.key = key;
	}

    @Column(name="bidTime")
	public Date getBidTime() {
		return bidTime;
	}
	public void setBidTime(Date bidTime) {
		this.bidTime = bidTime;
	}

	@Column(name="amount")
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
    
}