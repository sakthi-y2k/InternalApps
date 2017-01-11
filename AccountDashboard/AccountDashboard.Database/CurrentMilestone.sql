CREATE TABLE [dbo].[CurrentMilestone]
(
MilestoneId INT NOT NULL PRIMARY KEY,
ProjectId INT,
Milestone VARCHAR(200),
OrginalStartDate DATE,
OrginalEndDate DATE,
CurrentStartDate DATE,
CurrentEndDate DATE
)
