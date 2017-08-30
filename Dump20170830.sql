CREATE DATABASE  IF NOT EXISTS `hrassist` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `hrassist`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hrassist
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `job_apply`
--

DROP TABLE IF EXISTS `job_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_apply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fbgfdnhbgsv_idx` (`job_id`),
  KEY `fk_job_persInf_idx` (`user_id`),
  CONSTRAINT `fk_job_apply` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_job_persInf` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_apply`
--

LOCK TABLES `job_apply` WRITE;
/*!40000 ALTER TABLE `job_apply` DISABLE KEYS */;
INSERT INTO `job_apply` VALUES (1,2,1),(22,8,35),(23,2,35),(26,3,31),(36,2,39),(37,2,31),(39,8,31);
/*!40000 ALTER TABLE `job_apply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_requirments`
--

DROP TABLE IF EXISTS `job_requirments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_requirments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `skills_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`skills_id`),
  KEY `job_id_idx` (`job_id`),
  KEY `fk_job_requirment_skills1_idx` (`skills_id`),
  CONSTRAINT `FK_job_requirment-job` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_job_requirment_skills1` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_requirments`
--

LOCK TABLES `job_requirments` WRITE;
/*!40000 ALTER TABLE `job_requirments` DISABLE KEYS */;
INSERT INTO `job_requirments` VALUES (13,2,NULL,1),(16,2,NULL,5),(18,2,NULL,3),(35,8,NULL,4),(36,8,NULL,6),(37,8,NULL,3),(38,3,NULL,4),(39,3,NULL,6),(40,3,NULL,2),(43,8,NULL,16),(44,8,NULL,15);
/*!40000 ALTER TABLE `job_requirments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text,
  `benefits` text,
  `code` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (2,'fdsgbdfsgdqcdredwc','dfsgfdgqcd cdwqe cwrcewq\ncrcrewcw\ncerw\ncrc\ncerc\ncre\ncecre\nce\ncecce','fdsgfsdg','gsdfgfsd'),(3,'dfsgbfdsg','dgfsgfds','gdsfgsdfg','fdsgdsfefdcerfcwrefqwer'),(8,'rvfewgre','wfrefwref','werfrewgfwerfvcer','rwefre2wfew2rq');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_info`
--

DROP TABLE IF EXISTS `personal_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `description` text,
  `users_id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_personal_info_users1_idx` (`users_id`),
  CONSTRAINT `fk_personal_info_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_info`
--

LOCK TABLES `personal_info` WRITE;
/*!40000 ALTER TABLE `personal_info` DISABLE KEYS */;
INSERT INTO `personal_info` VALUES (1,'Szili','Toth','dsafgsdgvsadfv  uqfwewpdws ce pefpwewq pwqr fpoiw     hfqioewewfqew',1,NULL),(2,'Szili','T','Lorem ipsum dolor sit amet, consectetuer adip',2,NULL),(31,'asdffdas','sadfdsa','fqiviwndivJWVIOJ  ORAE\nVARV\nEVRAD\nBVAFD\nBAE\nBRAWR\nBVAWB\nRAWB\nARB',31,'https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/18519964_1501795996518881_8097497230756775869_n.jpg?oh=7d1bb2213ec90edce812de8c816937d5&oe=5A2AB965'),(33,'FGDGJ,HGF','User','adsfdfhsgfd',33,NULL),(35,'Levente','Szarvadi','werhrgf',35,NULL),(37,'Szili2','Toth',NULL,37,NULL),(39,'Vlad','Tomsa',NULL,39,NULL),(42,'sdfwegj','dwfegrhyuj',NULL,42,NULL),(43,'SZILI','SZILI',NULL,43,NULL);
/*!40000 ALTER TABLE `personal_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'HTML','HTML'),(2,'Angular2','Angular2'),(3,'JS','js'),(4,'CSS','CSS'),(5,'Java','Java'),(6,'PHP','Php'),(7,'Nodejs','node js'),(9,'sADFG','FDGS'),(10,'AFGHS','ASGFDHJ'),(12,'sdfsgdh','gfsdh'),(13,'wcev','cevfrg'),(14,'sdvfbgnhm','asdgfdhsgjh'),(15,'dvfbsgn','dsvfbdgnf'),(16,'qweasd','qweasd');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_education`
--

DROP TABLE IF EXISTS `user_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personal_info_id` int(11) NOT NULL,
  `scool_name` varchar(45) DEFAULT NULL,
  `graduated_year` int(11) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `FK_user_education-personal-info_idx` (`personal_info_id`),
  CONSTRAINT `FK_user_education-personal-info` FOREIGN KEY (`personal_info_id`) REFERENCES `personal_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_education`
--

LOCK TABLES `user_education` WRITE;
/*!40000 ALTER TABLE `user_education` DISABLE KEYS */;
INSERT INTO `user_education` VALUES (1,1,'Liceul',2013,' Quisque rutrum. Aenean imperdiet. Etiam ultr'),(2,1,'Babes-Bolyai',2017,' Quisque rutrum. Aenean imperdiet. Etiam ultr'),(3,1,'UTCN',2013,'truyeryrey'),(4,2,'Liceu',2014,' Quisque rutrum. Aenean imperdiet. Etiam ultr'),(5,2,'UTC',2019,' Quisque rutrum. Aenean imperdiet. Etiam ultr'),(7,33,'dsafdsafsda',2343,'sdafsafddsfafasf'),(10,2,'dsafsdf',2013,NULL),(11,31,'vxzVzx',2334,'czxvvXCx');
/*!40000 ALTER TABLE `user_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(45) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,'admin','admin'),(2,'hr','hr'),(3,'user','user');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_skills`
--

DROP TABLE IF EXISTS `user_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personal_info_id` int(11) NOT NULL,
  `skills_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_skills-personal-info_idx` (`personal_info_id`),
  KEY `fk_user_skills_skills1_idx` (`skills_id`),
  CONSTRAINT `FK_user_skills-personal-info` FOREIGN KEY (`personal_info_id`) REFERENCES `personal_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_skills_skills1` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_skills`
--

LOCK TABLES `user_skills` WRITE;
/*!40000 ALTER TABLE `user_skills` DISABLE KEYS */;
INSERT INTO `user_skills` VALUES (4,2,1),(5,2,4),(9,1,1),(10,2,2),(11,2,3),(54,1,3),(58,33,4),(59,33,6),(62,2,6),(63,35,4),(67,33,7),(68,35,1),(69,35,2),(70,31,2),(71,31,1),(84,31,3),(85,31,4),(86,31,5),(87,31,6),(88,31,7),(89,39,1);
/*!40000 ALTER TABLE `user_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_work_experience`
--

DROP TABLE IF EXISTS `user_work_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_work_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personal_info_id` int(11) NOT NULL,
  `company_name` varchar(45) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_work_experience-personal-info_idx` (`personal_info_id`),
  CONSTRAINT `FK_user_work_experience-personal-info` FOREIGN KEY (`personal_info_id`) REFERENCES `personal_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_work_experience`
--

LOCK TABLES `user_work_experience` WRITE;
/*!40000 ALTER TABLE `user_work_experience` DISABLE KEYS */;
INSERT INTO `user_work_experience` VALUES (1,1,'Arobs','developer','2017-08-01',NULL),(2,2,'Arobs GPS','senior developer','2017-07-31','2017-08-10'),(4,33,'dasfdsaf','dsafsdafsda','2017-08-21','2017-08-08'),(6,33,'feqweqf','efwqgrht','2017-08-01',NULL),(7,31,'defarghst','fasgdfhfj','2017-08-01',NULL);
/*!40000 ALTER TABLE `user_work_experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `user_role_id` int(11) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_users-user_roles_idx` (`user_role_id`),
  CONSTRAINT `FK_users-user_roles` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'szilard','pass3',1,NULL),(2,'szili','57ba172a6be125cca2f449826f9980ca',2,NULL),(31,'hracces','46f94c8de14fb36680850768ff1b7f2a',2,NULL),(33,'useracces','4753908da2cd1e92923c3ddfaa789d25',1,NULL),(35,'szarvadilevente','57ba172a6be125cca2f449826f9980ca',1,NULL),(37,'szilard2','pass3',1,NULL),(39,'vlad.tomsa','57ba172a6be125cca2f449826f9980ca',1,NULL),(42,'ujcvewtunjy','a85e305dce7297a21ed737abf543bf50',1,NULL),(43,'WDQefagsh','62fb4dab1d70b122b196ff827379023f',1,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-30 17:42:32
