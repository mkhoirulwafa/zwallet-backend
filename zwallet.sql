-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Okt 2020 pada 03.00
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zwallet`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `topup`
--

CREATE TABLE `topup` (
  `id` int(16) NOT NULL,
  `number` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `topup`
--

INSERT INTO `topup` (`id`, `number`, `title`, `description`) VALUES
(1, '1', 'Sudah terganti', 'alhamdulillah'),
(2, '2', 'Sudah terganti no 2', 'alhamdulillah 2'),
(3, '3', 'Select “Transfer” in the menu', 'description 3'),
(4, '4', 'Type the virtual account number that we provide you at the top.', 'description 4'),
(6, '6', 'Read the summary details', 'description 6'),
(7, '7', 'Press transfer / top up', 'description 7'),
(8, '8', 'You can see your money in Zwallet within 3 hours.', 'description 8'),
(10, '5', 'Type the amount of the money you want to top up.', 'description 5');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transfer`
--

CREATE TABLE `transfer` (
  `id` int(16) NOT NULL,
  `receiverName` varchar(100) NOT NULL,
  `receiverAvatar` varchar(100) NOT NULL,
  `receiverPhone` varchar(100) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `balanceLeft` varchar(100) NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp(),
  `notes` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transfer`
--

INSERT INTO `transfer` (`id`, `receiverName`, `receiverAvatar`, `receiverPhone`, `amount`, `balanceLeft`, `dateTime`, `notes`) VALUES
(3, 'Taro Momo', 'avatar1.jpg', '6281291291298', '120000', '10000', '2020-09-28 00:24:01', 'Buat beli makan'),
(4, 'Samuel Suhi', 'avatar22.jpg', '621234567890', '50000', '80000', '2020-09-29 07:00:47', 'Buat beli Cendol');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(16) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `avatar` varchar(200) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `balance` varchar(200) NOT NULL,
  `pin` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `editedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `avatar`, `phone`, `email`, `password`, `balance`, `pin`, `createdAt`, `editedAt`) VALUES
(1, 'Samuel', 'Suhi', 'avatar1.jpg', '1231231232123', 'samuelsuhi@mail.com', 'pw123123', '1000000', '123456', '2020-09-27 18:12:55', '2020-09-27 18:12:55'),
(2, 'Robert', 'Chandler', 'avatar2.jpg', '6283917319319', 'robertchandler@mail.com', 'pw11111', '123123123', '123123', '2020-09-27 18:14:35', '2020-09-27 18:14:35'),
(3, 'Momo', 'Taro', 'avatar3.jpg', '6281271721721', 'momotaro@mail.com', 'pw101010', '12012012', '0010101', '2020-09-27 18:16:57', '2020-09-27 18:16:57'),
(4, 'Jessica', 'Keen', 'avatar4.jpg', '628318213821', 'jessicakeen@mail.com', 'pw111222', '1112221212', '121121', '2020-09-27 18:21:39', '2020-09-27 18:21:39'),
(5, 'Michael', 'Le', 'avatar5.jpg', '1231231232123', 'michaelle@mail.com', 'pw111333', '102120120', '212120', '2020-09-27 18:22:43', '2020-09-27 18:22:43'),
(6, 'Christina', 'Marliana', 'avatar6.jpg', '628128931721', 'christinamar@mail.com', 'p129192', '10010100', '201291', '2020-09-27 18:27:01', '2020-09-27 18:27:01'),
(10, 'Pak', 'Solehudin', 'avatar7.jpg', '6281818181818', 'odading@mail.com', 'p129212', '100000000', '041402', '2020-09-27 20:03:33', '2020-09-27 20:03:33');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `topup`
--
ALTER TABLE `topup`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transfer`
--
ALTER TABLE `transfer`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `topup`
--
ALTER TABLE `topup`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `transfer`
--
ALTER TABLE `transfer`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
