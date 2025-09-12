CREATE TABLE Dinosaures(
   id VARCHAR(50) ,
   description VARCHAR(500) ,
   regime VARCHAR(100) ,
   PRIMARY KEY(id)
);

CREATE TABLE Types_de_billet(
   Id_Types_de_billet SERIAL,
   unitaire VARCHAR(100) ,
   special VARCHAR(50) ,
   PRIMARY KEY(Id_Types_de_billet)
);

CREATE TABLE user_(
   id SERIAL,
   name VARCHAR(100) ,
   PRIMARY KEY(id)
);

CREATE TABLE Reservations(
   Id_Reservations SERIAL,
   Date_de_resa DATE,
   id INTEGER NOT NULL,
   PRIMARY KEY(Id_Reservations),
   FOREIGN KEY(id) REFERENCES user_(id)
);

CREATE TABLE correspond(
   Id_Types_de_billet INTEGER,
   Id_Reservations INTEGER,
   PRIMARY KEY(Id_Types_de_billet, Id_Reservations),
   FOREIGN KEY(Id_Types_de_billet) REFERENCES Types_de_billet(Id_Types_de_billet),
   FOREIGN KEY(Id_Reservations) REFERENCES Reservations(Id_Reservations)
);

CREATE TABLE permet(
   id VARCHAR(50) ,
   Id_Types_de_billet INTEGER,
   PRIMARY KEY(id, Id_Types_de_billet),
   FOREIGN KEY(id) REFERENCES Dinosaures(id),
   FOREIGN KEY(Id_Types_de_billet) REFERENCES Types_de_billet(Id_Types_de_billet)
);
