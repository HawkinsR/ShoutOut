GO
-- DROP CONSTRAINTS ---------------------------------------------------------
-- ALTER TABLE Shouts
--     DROP CONSTRAINT FK_Shouts_Users;    

-- ALTER TABLE Shouts
--     DROP CONSTRAINT PK_Shouts;

-- ALTER TABLE Users
--     DROP CONSTRAINT PK_Users;

-- GO
-- -- DROP TABLES --------------------------------------------------------------
-- DROP TABLE Shouts;

-- DROP TABLE Users;

-- GO
-- CREATE TABLES ------------------------------------------------------------
CREATE TABLE Users
(
	UserId NVARCHAR NOT NULL,
	UserName NVARCHAR NOT NULL,
	UserPassword NVARCHAR NOT NULL,
	UserEmail NVARCHAR NOT NULL,
    CONSTRAINT PK_Users
        PRIMARY KEY (UserId),
)

CREATE TABLE Shouts
(
    SOId INT IDENTITY,
    SODateTime DATETIME2 NOT NULL,
    SOTitle NVARCHAR NOT NULL,
    SOComment NVARCHAR NOT NULL,
    SOEdited BIT NOT NULL,
    SOEditDateTime DATETIME2 NOT NULL,
    UserId NVARCHAR NOT NULL,
    CONSTRAINT PK_Shouts
        PRIMARY KEY (SOId),
    CONSTRAINT FK_Shouts_Users
        FOREIGN KEY (UserId)
        REFERENCES Users(UserId),
);

GO