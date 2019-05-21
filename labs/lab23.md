---
layout: default
title: "Lab 23: SQL, Queries, Joins"
---

Getting Started
===============
For our last week in CS201, we're going to "borrow" labs from the CS320 SW Engineering Course.  If you are taking SW Engineering this coming Spring, you'll be getting a head start on the assignments in CS320.

Download [CS201\_Derby.zip](../resources/CS201_Derby.zip) and [CS201\_Lab23.zip](CS201_Lab23.zip). Import them into your Eclipse workspace<br> (**File-\>Import...-\>General-\>Existing projects into workspace-\>Archive File**). You will see projects called **CS201\_Derby** and **CS201\_Lab23** in the Package Explorer.  You will be running the **SQLDemo** class in the **CS201_Lab23** project.

Setting up the database
=======================

Execute the **SQLDemo** class as a Java application.

Use **create table** commands to create **books** and **authors** tables. From the **SQL\>** prompt, enter the following commands:

    create table books (
        book_id int
            primary key generated always as identity (start with 1, increment by 1),
        author_id int not null,
        title varchar(50) not null,
        isbn varchar(20) not null
    );

    create table authors (
        author_id int
            primary key generated always as identity (start with 1, increment by 1),
        author_lastname varchar(40) not null,
        author_firstname varchar(40) not null
    );

Next, use **import** commands to load data into these tables:

    import books books.csv;

    import authors authors.csv;

Your database is now populated with data.

Now, use the **alter table** command to establish **author_id** as a foreign key in the **books** table.  Enter the following command:

    alter table books
        add foreign key (author_id)
        references authors (author_id);
    
The schemas of the database tables are described in the notes for [Lecture 24](../lectures/lecture24.html).

Task
====

Try executing some queries to retrieve the following information:

-   the titles of all books written by F.G. Smallfinger
-   the titles of all books written by Callus Tacticus
-   the author name (first and last) and the ISBN number of the book with the title "First Flights in Witchcraft"
-   attempt to insert a new book into the **books** table, with an **author_id** that does not appear in the **authors** table (this attempt should fail, due to specifying an invalid **foreign key** for **author_id**)
-   insert yourself as a new author in the the **authors** table (do not specify an author_id, Derby will do that for you, since **author_id** is the auto-generated primary key for the **authors** table)
-   retrieve the **author_id** from the **authors** table for your entry
-   insert a new book into the **books** table, using your new **author_id**

Each query should be terminated with a semicolon (**;**). For example, here is session showing a query to select all of the tuples in the **authors** table (user input in **bold**):

<pre>
SQL> <b>select * from authors;</b>
AUTHOR_ID AUTHOR_LASTNAME AUTHOR_FIRSTNAME
--------- --------------- ----------------
        1     Smallfinger             F.G.
        2       Whittlbey           W.H.J.
        3          Earwig          Lettice
        4         Lightly             W.E.
        5        Tacticus           Callus
OK (5 rows(s))
</pre>

[Here is a great tutorial site for learning SQL](http://www.w3schools.com/sql/default.asp)

# What to submit

Create a text file containing, for each query listed above:

* The exact query you came up with
* The exact output of the query

You can cut and paste these from the console window as shown above.

Save your queries and outputs in a plain text file and upload the text file to Marmoset as **lab23**.
