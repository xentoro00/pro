-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2024 at 06:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `accountcategories`
--

CREATE TABLE `accountcategories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ratings` float NOT NULL,
  `code` varchar(20) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accountcategories`
--

INSERT INTO `accountcategories` (`id`, `name`, `ratings`, `code`, `description`) VALUES
(4, 'Fixed Deposit Account	', 40, 'ACC-CAT-YICS', ''),
(5, 'Recurring deposit	', 15, 'ACC-CAT-06P5', ''),
(6, 'Savings', 15, 'ACC-CAT-E5KB', ''),
(7, 'Retirement', 10, 'ACC-CAT-FKBA', ''),
(9, 'Current account	', 20, 'ACC-CAT-D2DX', '');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'admin'),
(2, 'adminn@gmail.com', 'adminadmin1'),
(3, 'bani@gmail.com', 'bani12345');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`id`, `name`, `email`, `message`) VALUES
(2, 'aasd', 'bani@gmail.com', 'dsasddsaasd'),
(6, 'Shabannn Buja', 'bani@gmail.com', 'dsasddsaasd'),
(8, 'Shabannn Buja', 'bani@gmail.com', 'dsasddsaasd');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `Id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `staff_number` varchar(255) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`Id`, `name`, `email`, `staff_number`, `gender`, `phone_number`, `password`, `created_at`) VALUES
(6, 'test', 'badani@gmail.com', '32113212', 'Male', '', 'bani12345', '2024-03-28 09:39:50');

-- --------------------------------------------------------

--
-- Table structure for table `loginregister`
--

CREATE TABLE `loginregister` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `banknumber` bigint(100) NOT NULL,
  `account` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dateb` year(4) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `phonenumber` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loginregister`
--

INSERT INTO `loginregister` (`id`, `name`, `lastname`, `banknumber`, `account`, `email`, `password`, `dateb`, `gender`, `phonenumber`) VALUES
(3, 'Bani', 'Buja', 22234076, 'Fixed Deposit Account', 'bani@gmail.com', 'bani12345', '2001', 'Male', '+38345963828'),
(9, 'Arion', 'Rexhepi', 22237841, 'Savings', 'bani@gmail.com', 'bani12345', '2000', 'Male', '212112');

-- --------------------------------------------------------

--
-- Table structure for table `registeracc`
--

CREATE TABLE `registeracc` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `acc` varchar(255) NOT NULL,
  `banknumber` bigint(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dateb` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `phonenumber` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `staffi`
--

CREATE TABLE `staffi` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `staff_number` int(11) NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staffi`
--

INSERT INTO `staffi` (`id`, `name`, `staff_number`, `gender`, `phone_number`, `email`, `password`, `created_at`) VALUES
(13, 'Shaban', 22233133, 'Male', '', 'baeni@gmail.com', 'bani12345', '2024-03-31 21:37:38'),
(14, 'Shaban Buja', 22235330, 'Male', '', 'bani@gmail.com', 'bani12345', '2024-03-31 22:35:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accountcategories`
--
ALTER TABLE `accountcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `loginregister`
--
ALTER TABLE `loginregister`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `banknumber` (`banknumber`);

--
-- Indexes for table `staffi`
--
ALTER TABLE `staffi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accountcategories`
--
ALTER TABLE `accountcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `loginregister`
--
ALTER TABLE `loginregister`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `staffi`
--
ALTER TABLE `staffi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
