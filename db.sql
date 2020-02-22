CREATE DATABASE IF NOT EXISTS `asteroid`
USE `asteroid`;

CREATE TABLE IF NOT EXISTS `lang` (
  `id` bigint(20) DEFAULT NULL,
  `lang` tinytext DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `discord` tinytext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
