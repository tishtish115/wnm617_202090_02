-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 10, 2020 at 01:04 PM
-- Server version: 5.6.41-84.1
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `anotherl_test1`
--

-- --------------------------------------------------------

--
-- Table structure for table `Track_locations`
--

CREATE TABLE `Track_locations` (
  `id` int(11) NOT NULL DEFAULT '0',
  `animal_id` int(11) NOT NULL,
  `lat` decimal(9,0) NOT NULL,
  `lng` decimal(9,0) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `icon` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Track_locations`
--
ALTER TABLE `Track_locations`
  ADD PRIMARY KEY (`id`);
COMMIT;
