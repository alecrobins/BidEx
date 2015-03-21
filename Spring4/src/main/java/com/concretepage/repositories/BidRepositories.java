package com.concretepage.repositories;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.concretepage.entities.Bid;

@Transactional
@Repository
public class BidRepositories {
	@Autowired
	private HibernateTemplate hibernateTemplate;

	public List<Bid> getAllUsers() {
		return this.hibernateTemplate.loadAll(Bid.class);
	}

}
