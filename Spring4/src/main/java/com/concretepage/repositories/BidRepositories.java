package com.concretepage.repositories;

import java.util.Date;
import java.util.List;

import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.concretepage.entities.Bid;
import com.concretepage.entities.Members;

@Transactional
@Repository
public class BidRepositories {
	@Autowired
	private HibernateTemplate hibernateTemplate;

	public List<Bid> getAllUsers() {
		return this.hibernateTemplate.loadAll(Bid.class);
	}

	public void createBid() {
		Bid bb = new Bid();
		bb.setKey(10);
		bb.setAmount(10);
		bb.setBidTime(new Date());
		this.hibernateTemplate.save(bb);
	}

	public String login(String id, String password) {
		return this.hibernateTemplate.getSessionFactory().getCurrentSession()
				.createCriteria(Members.class).add(Restrictions.eq("id", id))
				.add(Restrictions.eq("password", password)).uniqueResult() == null ? "no"
				: "yes";
	}

}
