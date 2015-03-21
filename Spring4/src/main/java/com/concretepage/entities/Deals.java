package com.concretepage.entities;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="deals")
public class Deals {
    private int key;
    private String title;
    private String imgPath;
    private String description;
    private Date startTime;
    private Date endTime;
    private String comments;
    private int currentCost;
    
    public Deals() {
    	
    }
    
    @Id
    @GeneratedValue
    @Column(name="key")
    public int getKey() {
        return this.key;
    }
    public void setKey(int key) {
        this.key = key;
    }
    
    @Column(name="title")
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    
    @Column(name="imgPath")
    public String getImgPath() {
        return imgPath;
    }
    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }
    
    @Column(name="description")
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    
    @Column(name="startTime")
    public Date getStartTime() {
    	return startTime;
    }
    public void setStartTime(Date startTime) {
    	this.startTime = startTime;
    }
 
    @Column(name="endTime")
    public Date getEndTime() {
    	return endTime;
    }
    public void setEndTime(Date endTime) {
    	this.endTime = endTime;
    }

    @Column(name="comments")
    public String getComments() {
        return comments;
    }
    public void setComments(String comments) {
        this.comments = comments;
    }
    
    @Column(name="currentCost")
    public int getCurrentCost() {
        return currentCost;
    }
    public void setCurrentCost(int currentCost) {
        this.currentCost = currentCost;
    }
}
