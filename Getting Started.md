## Create a New SQL File

in terminal: touch foldername/myNewSQLFile.sql

## Get psql Up and Running

Start psql from the appropriate folder

## Create/Enter a Database

If it doesn't exist already:  CREATE DATABASE dbname;

Enter it with  \c dbname; 

## Migrations (???)
// NOTE: wtf are migrations?

In terminal, create a migrations folder and a dbNameA_dbNameB.sql file.

## Create Tables

CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  start_date DATE,
  end_date DATE
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(32),
  github VARCHAR(255),
  start_date DATE,
  end_date DATE,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
);

From your psql session, type \i migrations/students_cohorts.sql
Now enter \dt (list all tables) into your psql session to make sure the two tables have been created.

## Getting External SQL Files

If you don't have wget already, install with brew install wget.

Run the following in Terminal:

wget (url) -0 seeds/students.sql     // (or whatever your path is)

Insert in psql:

\i seeds/students.sql  // (or whatever your path is)

Try running SELECT count(*) FROM students; to make sure it works.