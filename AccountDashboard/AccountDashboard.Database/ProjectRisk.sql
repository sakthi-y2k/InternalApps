CREATE TABLE [dbo].[ProjectRisk]
(
RiskId INT NOT NULL PRIMARY KEY,
ProjectId INT,
Risk INT,
OpenRisks INT,
ActionPlan VARCHAR(100),
SupportRequests VARCHAR(100)
)
