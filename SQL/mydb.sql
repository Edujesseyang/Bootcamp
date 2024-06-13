

\copy (SELECT * FROM table2) TO 'tmp/mydb.txt' WITH CSV HEADER DELIMITER '|';
