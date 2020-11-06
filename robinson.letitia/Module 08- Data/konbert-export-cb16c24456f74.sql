CREATE TABLE IF NOT EXISTS `track_users.sql` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_users.sql VALUES
(1,'Cristina Buckley','user1','user1@gmail.com','md5(pass)','https://via.placeholder.com/400/825/fff/?text=user1','2020-03-22 02:37:12'),
(2,'Alba Odom','user2','user2@gmail.com','md5(pass)','https://via.placeholder.com/400/780/fff/?text=user2','2020-07-19 07:33:27'),
(3,'Hood Davis','user3','user3@gmail.com','md5(pass)','https://via.placeholder.com/400/943/fff/?text=user3','2020-01-22 06:37:06'),
(4,'Pollard Oneill','user4','user4@gmail.com','md5(pass)','https://via.placeholder.com/400/806/fff/?text=user4','2020-01-22 12:01:28'),
(5,'Brooke Livingston','user5','user5@gmail.com','md5(pass)','https://via.placeholder.com/400/980/fff/?text=user5','2020-09-02 12:46:22'),
(6,'Baxter Phelps','user6','user6@gmail.com','md5(pass)','https://via.placeholder.com/400/980/fff/?text=user6','2020-06-02 02:17:57'),
(7,'Megan Leon','user7','user7@gmail.com','md5(pass)','https://via.placeholder.com/400/704/fff/?text=user7','2020-08-22 08:41:06'),
(8,'Michelle Hancock','user8','user8@gmail.com','md5(pass)','https://via.placeholder.com/400/710/fff/?text=user8','2020-09-13 09:40:56'),
(9,'Althea Caldwell','user9','user9@gmail.com','md5(pass)','https://via.placeholder.com/400/810/fff/?text=user9','2020-10-16 05:10:10'),
(10,'Tamara Moran','user10','user10@gmail.com','md5(pass)','https://via.placeholder.com/400/994/fff/?text=user10','2020-01-27 06:11:34');