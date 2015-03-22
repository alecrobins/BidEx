package com.mastercard.bidex.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="members")
public class Members {
	private int key;
    private String id;
    private String password;
    private String profilePic;
    
    public Members() {
    	
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

	@Column(name="id")
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

	@Column(name="password")
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name="profilePic")
	public String getProfilePic() {
		return profilePic;
	}
	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}
    
    
}
