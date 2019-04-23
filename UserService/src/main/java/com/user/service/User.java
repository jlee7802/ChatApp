package com.user.service;

import java.sql.Date;

public class User {
	public int userId;
	public String firstName;
	public String lastName;
	public String email;
	public String password;
	public Date createdDate;
	public Date updatedDate;
	
	public User(String firstName, String lastName, String email, String password, Date dateUpdated, Date dateCreated) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.createdDate = dateCreated;
		this.updatedDate = dateUpdated;
	}
	
	public User(int userId, String firstName, String lastName, String email) {
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
	
	int getUserId() {
		return this.userId;
	}
	
	String getFirstName() {
		return this.firstName;
	}
	
	String getLastName() {
		return this.lastName;
	}
	
	String getEmail() {
		return this.email;
	}
	
	String getPassword() {
		return this.password;
	}
	
	Date getDateUpdated() {
		return this.updatedDate;
	}
	
	Date getDateCreated() {
		return this.createdDate;
	}
}
