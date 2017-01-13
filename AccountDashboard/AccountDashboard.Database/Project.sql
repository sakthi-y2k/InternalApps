CREATE TABLE [dbo].[Project]
(
Id INT PRIMARY KEY Identity(1,1),
ProjectId INT NOT NULL,
Name VARCHAR(100) NOT NULL,
Status bit NOT NULL,
Manager VARCHAR(100),
ActualStartDate DATE,
ActualEndDate DATE,
PlannedEffort INT,
ActualEffort INT,
TCV INT
)
