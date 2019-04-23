package com.chat.service;

import java.sql.Date;

public class Chat {
	public long id;
	public String name;
	public String descr;
	public int groupId;
	public Date createdDate;
	public Date updatedDate;
	
	public Chat(long id, String name, String descr, int groupId, Date createdDate, Date updatedDate) {
		this.id = id;
		this.name = name;
		this.descr = descr;
		this.groupId = groupId;
		this.createdDate = createdDate;
		this.updatedDate = updatedDate;
	}
	
	long getId() {
		return this.id;
	}
	
	String getChatName() {
		return this.name;
	}
	
	String getChatDesc() {
		return this.descr;
	}
	
	int getGroupId() {
		return this.groupId;
	}
	
	Date getCreatedDate() {
		return this.createdDate;
	}
	
	Date getUpdatedDate() {
		return this.updatedDate;
	}
}
