CREATE TABLE reactions (
  id int primary key auto_increment,
  created_at timestamp,
  video_id int,
  `value` int,
  author_id int
);

INSERT INTO reactions (created_at, video_id, value, author_id)
VALUES
	(current_timestamp(), 123, 5, 76763),
  (current_timestamp(), 533, 3, 12),
  (current_timestamp(), 632, 3, 542),
  (current_timestamp(), 511, 4, 777),
  (current_timestamp(), 898, 4, 2709);

SELECT *
FROM reactions



CREATE TABLE comments (
  id int primary key auto_increment,
  created_at timestamp,
  video_id int,
  content varchar(128),
  author_id int
);

INSERT INTO comments (created_at, video_id, content, author_id)
VALUES
  (current_timestamp(), 123, 'Wtat?', 76763),
  (current_timestamp(), 533, 'Where?', 12),
  (current_timestamp(), 632, 'Who?', 542),
  (current_timestamp(), 511, 'When?', 777),
  (current_timestamp(), 898, 'Hello!', 2709);

SELECT *
FROM comments

