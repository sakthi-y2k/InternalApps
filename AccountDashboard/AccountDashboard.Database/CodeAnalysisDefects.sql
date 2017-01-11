CREATE TABLE [dbo].[CodeAnalysisDefects]
(
AnalysisID INT NOT NULL PRIMARY KEY,
MileStoneId INT,
ProjectId INT,
Critical VARCHAR(20),
Blocker VARCHAR(20),
Major VARCHAR(20),
Minor VARCHAR(20)
)
