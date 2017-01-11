CREATE TABLE [dbo].[ProjectRisk]
(
RiskId INT NOT NULL PRIMARY KEY,
ProjectId INT,
RiskCount INT,
OpenRiskCount INT,
ActionPlan VARCHAR(500),
SupportRequest VARCHAR(500)
)
