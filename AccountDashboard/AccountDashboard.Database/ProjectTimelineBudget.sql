CREATE TABLE [dbo].[ProjectTimelineBudget]
(
BudgetId INT NOT NULL PRIMARY KEY,
ProjectId INT,
CurrentStartDate DATE,
CurrentEndDate DATE,
Revenue INT,
BurntEffort INT,
UCPCPFPOrg INT,
UCPCPFPCur INT
)
