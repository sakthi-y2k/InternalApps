CREATE TABLE [dbo].[Milestone]
(
Id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
ProjectId INT NOT NULL  FOREIGN KEY REFERENCES Project(Id),
MilestoneType INT NOT NULL,
MilestoneStatus INT NOT NULL,
--MilestoneType INT NOT NULL FOREIGN KEY REFERENCES MilestoneType(Id),
--MilestoneStatus INT NOT NULL FOREIGN KEY REFERENCES MilestoneStatus(Id),
PlannedStartDate DATE,
PlannedEndDate DATE,
ActualStartDate DATE,
ActualEndDate DATE
)
