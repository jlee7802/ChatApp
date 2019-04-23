package com.group.service;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class GroupController {
	
	// Gets all groups ordered by active users
	@GetMapping("/group")
	ResponseEntity<String> getAllGroup() {
		ArrayList<Group> groupList = new ArrayList<Group>();

		try {
			Class.forName("org.postgresql.Driver");
			Connection conn = DriverManager.getConnection(connectionString());

			String storedProc = "select * from get_all_group()";
			PreparedStatement pstmt = conn.prepareStatement(storedProc);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				long groupId = rs.getLong("id");
				String groupName = rs.getString("name");
				int subscriberCount = rs.getInt("subscriber_count");
				String groupDesc = rs.getString("descr");
				Date createdDate = rs.getDate("created_date");
				Date updatedDate = rs.getDate("updated_date");
				int categoryId = rs.getInt("category_id");

				Group group = new Group(groupId, groupName, subscriberCount, groupDesc, createdDate, updatedDate,
						categoryId);
				groupList.add(group);
			}
		} catch (SQLException err) {
			System.out.println(err.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err.getMessage());
		} catch (ClassNotFoundException err) {
			System.out.println(err.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err.getMessage());
		}

		// Convert group list to json
		String json = "";

		try {
			ObjectMapper mapper = new ObjectMapper();
			json = mapper.writeValueAsString(groupList);
		} catch (Exception err) {
			System.out.println();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err.getMessage());
		}

		return ResponseEntity.ok(json);
	}

	// Returns group based on category
	@GetMapping("/group/category/{categoryId}")
	ResponseEntity<String> getGroupByCategory(@PathVariable int categoryId) {
		ArrayList<Group> groupList = new ArrayList<Group>();

		try {
			Class.forName("org.postgresql.Driver");
			Connection conn = DriverManager.getConnection(connectionString());

			String storedProc = "select * from get_group_by_category(?)";
			PreparedStatement pstmt = conn.prepareStatement(storedProc);
			pstmt.setInt(1, categoryId);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				long groupId = rs.getLong("id");
				String groupName = rs.getString("name");
				int subscriberCount = rs.getInt("subscriber_count");
				String groupDesc = rs.getString("descr");
				Date createdDate = rs.getDate("created_date");
				Date updatedDate = rs.getDate("updated_date");

				Group group = new Group(groupId, groupName, subscriberCount, groupDesc, createdDate, updatedDate,
						categoryId);
				groupList.add(group);
			}
		} catch (SQLException err) {
			System.out.println(err.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err.getMessage());
		} catch (ClassNotFoundException err) {
			System.out.println(err.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err.getMessage());
		}

		// Convert group list to json
		String json = "";

		try {
			ObjectMapper mapper = new ObjectMapper();
			json = mapper.writeValueAsString(groupList);
		} catch (Exception err) {
			System.out.println();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err.getMessage());
		}

		return ResponseEntity.ok(json);
	}

	// Returns group based on user id
	@GetMapping("/group/{userId}")
	ResponseEntity<String> getGroupByUser(@PathVariable int userId) {
		ArrayList<Group> groupList = new ArrayList<Group>();

		try {
			Class.forName("org.postgresql.Driver");
			Connection conn = DriverManager.getConnection(connectionString());

			String storedProc = "select * from get_group_by_userid(?)";
			PreparedStatement pstmt = conn.prepareStatement(storedProc);
			pstmt.setInt(1, userId);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				long groupId = rs.getLong("id");
				String groupName = rs.getString("name");
				int subscriberCount = rs.getInt("subscriber_count");
				String groupDesc = rs.getString("descr");
				Date createdDate = rs.getDate("created_date");
				Date updatedDate = rs.getDate("updated_date");
				int categoryId = rs.getInt("category_id");

				Group group = new Group(groupId, groupName, subscriberCount, groupDesc, createdDate, updatedDate,
						categoryId);
				groupList.add(group);
			}
		} catch (SQLException err) {
			System.out.println(err.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err.getMessage());
		} catch (ClassNotFoundException err) {
			System.out.println(err.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err.getMessage());
		}

		// Convert group list to json
		String json = "";

		try {
			ObjectMapper mapper = new ObjectMapper();
			json = mapper.writeValueAsString(groupList);
		} catch (Exception err) {
			System.out.println();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err.getMessage());
		}

		return ResponseEntity.ok(json);
	}

	String connectionString() {
		String hostname = ""; // Figure out how to put this in the config
																			// file.
		String port = "";
		String dbName = "";
		String userName = "";
		String password = "";

		return "jdbc:postgresql://" + hostname + ":" + port + "/" + dbName + "?user=" + userName + "&password="
				+ password;
	}
}
