SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

CREATE DATABASE IF NOT EXISTS `bitex` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `bitex`;

-- --------------------------------------------------------

--
-- `bid`
--

CREATE TABLE IF NOT EXISTS `bid` (
`key` smallint(5) NOT NULL,
  `bidTime` datetime NOT NULL,
  `amount` smallint(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COMMENT='Database for past and current bids ';

--
-- Insert Initial Test Value to `bid` 
--

INSERT INTO `bid` (`key`, `bidTime`, `amount`) VALUES
(1, '2015-03-22 15:42:17', 1000);

-- --------------------------------------------------------

--
-- `deals`
--

CREATE TABLE IF NOT EXISTS `deals` (
`key` smallint(5) NOT NULL,
  `title` varchar(30) NOT NULL,
  `imgPath` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `comments` text NOT NULL,
  `currentCost` smallint(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COMMENT='Database for Items that are on auction';

--
-- Insert Initial Test Value to `deals`
--

INSERT INTO `deals` (`key`, `title`, `imgPath`, `description`, `startTime`, `endTime`, `comments`, `currentCost`) VALUES
(1, 'Test Bid', '/img/deals/Test_Bid_0', 'This is a Test Description', '2015-03-22 00:00:00', '2015-03-22 23:50:00', 'This is a Test Comment', 10000);

-- --------------------------------------------------------

--
-- `members`
--

CREATE TABLE IF NOT EXISTS `members` (
`key` smallint(5) unsigned NOT NULL,
  `id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `profilePic` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COMMENT='User Database';

--
-- Insert Initial Test Value to `members`
--

INSERT INTO `members` (`key`, `id`, `password`, `profilePic`) VALUES
(1, 'admin', 'admin', '/img/profilePic/admin_0');

--
-- Change Keys
--
ALTER TABLE `bid`
 ADD PRIMARY KEY (`key`);
ALTER TABLE `deals`
 ADD PRIMARY KEY (`key`);
ALTER TABLE `members`
 ADD PRIMARY KEY (`key`);
ALTER TABLE `bid`
MODIFY `key` smallint(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
ALTER TABLE `deals`
MODIFY `key` smallint(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
ALTER TABLE `members`
MODIFY `key` smallint(5) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
