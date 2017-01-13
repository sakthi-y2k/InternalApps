CREATE TABLE [dbo].[BudgetTimeline]
(
Id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
MilestoneId INT NOT NULL FOREIGN KEY REFERENCES Milestone(Id),
ActualStartDate DATE,
ActualEndDate DATE,
Revenue INT,
BurntEffort INT,
UCPCPFPOrg INT,
UCPCPFPCur INT
)
