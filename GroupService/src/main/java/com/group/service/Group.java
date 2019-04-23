package com.group.service;

import java.util.Date;

public class Group {
	public long id;
	public String name;
	public int subscriberCount;
	public String descr;
	public Date createdDate;
	public Date updatedDate;
	public int categoryId;
	
	public Group(long id, String name, int subscriberCount, String descr, Date createdDate, Date updatedDate, int categoryId) {
		this.id = id;
		this.name = name;
		this.subscriberCount = subscriberCount;
		this.descr = descr;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
		this.categoryId = categoryId;
	}
	
	long getId() {
		return this.id;
	}
	
	String getGroupName() {
		return this.name;
	}
	
	int getSubscribersCount() {
		return this.subscriberCount;
	}
	
	String getGroupDescription() {
		return this.descr;
	}
	
	Date getCreatedDate() {
		return this.createdDate;
	}
	
	Date getUpdatedDate() {
		return this.updatedDate;
	}
	
	int getCategoryId() {
		return this.categoryId;
	}
}