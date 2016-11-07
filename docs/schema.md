# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
artist      | string    | not null
description | text      | not null
image_url   | string    | default: [generic image]

## album_status
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
album_id    | integer   | not null, foreign key
status      | string      | not null, [inclusion in on model]

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed, unique [album_id]
album_id    | integer   | not null, foreign key, indexed
body        | text      |
rating      | integer   | not null

## friends (bonus)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed, unique [friend_id]
friend_id   | integer   | not null, foreign key (refers to user), indexed

## review likes (bonus)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
review_id   | integer   | not null, foreign key, indexed, unique [user_id]
user_id     | integer   | not null, foreign key, indexed
