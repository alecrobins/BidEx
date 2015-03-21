BidEx Database File
	members
		->key(Auto increment)
		->id(varchar(20))
		->password(varchar(20))
		->profilePic(varchar(50))
	deals
		->key(Auto increment)
		->title(varchar(30))
		->imgPath(varchar(50))
		->description(text)
		->startTime(dateTime)
		->endTime(dateTime)
		->comments(text)
	bid
		->key(Auto increment)
		->bidTime (dateTime YYYY-MM-DD HH-MM-SS)
		->amount (smallint(10))

		

Initial saved values for examples:
	members
		-> key, id, password, profilePic INTO (1, admin, admin, /img/profilePic/admin_0)
	deals
		-> key, title, imgPath, description, startTime, endTime, comments INTO (1, Test Bid, /img/deals/Test_Bid_0, 
																				This is a Test Description, 2015-03-22 00:00:00, 
																				2015-03-22 23:50:00, This is a Test Comment)
	bid
		-> key, bidTime, amount INTO (1, 2015-03-22 15:42:17, 1000)