CREATE TABLE [dbo].[ProjectDetails]
(
ProjectId INT PRIMARY KEY,
ProjectName VARCHAR(100),
PrStatus VARCHAR(20),
PrjManager VARCHAR(30),
OrginalStartDate DATE,
OrginalEndDate DATE,
PlannedEffort INT,
ActualEffort INT,
TCV INT
)
