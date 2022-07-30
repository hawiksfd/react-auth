-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2022 at 01:47 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `uuid`, `name`, `price`, `userId`, `createdAt`, `updatedAt`) VALUES
(3, 'd7c7a04a-c35d-46be-948d-0d8cfad36cc0', 'produk niam 1 updated', 11111, 2, '2022-07-28 07:16:30', '2022-07-28 07:44:59'),
(4, '7bfd2236-9e3c-49a1-8ea6-62ad1bf5d12d', 'produk niam 2', 2000, 2, '2022-07-28 07:16:35', '2022-07-28 07:16:35'),
(6, 'd86539ec-990d-4314-98eb-7ad7a313c322', 'produk muna 2', 2222, 3, '2022-07-28 07:49:13', '2022-07-28 07:49:13');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(2, '2174cfa3-888a-40e5-88c8-90e712739136', 'niam', 'niam@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$DcVNR4IE+rCBKw4Zqgkvqg$GiE3N8rGhWMWUQKzSvCeMFSuU4Wxt5ICusjZT93b+EM', 'admin', '2022-07-26 07:59:53', '2022-07-28 04:18:06'),
(3, 'b106a1f7-f1e7-4636-8435-d5e1c34a1d1b', 'muna updated', 'muna@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$PZX3FO5SDr0HP1AOLYyeCQ$ninTdK1ShLEMBvt98+f8YrR23YJWS0NX/beMB4r7e90', 'user', '2022-07-28 02:57:35', '2022-07-28 06:22:48'),
(4, '9948fac5-ae16-4c38-9d82-09b70d90c752', 'agus', 'agus@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$DejsvzocsDKe0S2au8lXSA$imW5Yp+4AnlK+XoHiz6jZuI47L6pOtB/Ga+y9ijhZ/s', 'user', '2022-07-28 02:57:58', '2022-07-28 02:57:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
