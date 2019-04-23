package com.category.service;

import java.util.Date;

public class Category {
	public long id;
	public String name;
	public Date createdDate;
	public Date updatedDate;
	
	public Category(long id, String name, java.util.Date createdDate2, java.util.Date updatedDate2){
		this.id = id;
		this.name = name;
		this.createdDate = createdDate2;
		this.updatedDate = updatedDate2;
	}
	
	long getId() {
		return this.id;
	}
	
	String getCategoryName() {
		return this.name;
	}
	
	Date getCreatedDate() {
		return this.createdDate;
	}
	
	Date getUpdatedDate() {
		return this.updatedDate;
	}
}
