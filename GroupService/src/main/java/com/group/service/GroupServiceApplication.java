package com.group.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class GroupServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GroupServiceApplication.class, args);
	}

}