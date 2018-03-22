
USE h90ncfx3ux3kkw9y;

CREATE TABLE user_data (
	id int NOT NULL AUTO_INCREMENT,
	firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    todoList BOOL DEFAULT false,
    doneList BOOL DEFAULT false,
    PRIMARY KEY (id)
);   