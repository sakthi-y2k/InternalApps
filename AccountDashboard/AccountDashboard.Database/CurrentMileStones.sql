CREATE TABLE [dbo].[CurrentMileStones]
(
MilestoneId INT NOT NULL PRIMARY KEY,
ProjectId INT,
MileStone VARCHAR(20),
OrginalStartDate DATE,
OrginalEndDate DATE,
CurrentStartDate DATE,
CurrentEndDate DATE
)
