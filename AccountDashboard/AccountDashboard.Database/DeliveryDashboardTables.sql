IF EXISTS(SELECT 1 FROM Sys.Tables WHERE NAME = 'ProjectDetails')
BEGIN
DROP TABLE ProjectDetails
END
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE ProjectDetails
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
GO

IF EXISTS(SELECT 1 FROM Sys.Tables WHERE NAME = 'CurrentMilestoneDetails')
BEGIN
DROP TABLE CurrentMilestoneDetails
END
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE CurrentMilestoneDetails
(
ProjectId INT,
MileStone VARCHAR(20),
OrginalStartDate DATE,
OrginalEndDate DATE,
CurrentStartDate DATE,
CurrentEndDate DATE
)
GO

IF EXISTS(SELECT 1 FROM Sys.Tables WHERE NAME = 'ProjectTimelineBudget')
BEGIN
DROP TABLE ProjectTimelineBudget
END
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE ProjectTimelineBudget
(
ProjectId INT,
CurrentStartDate DATE,
CurrentEndDate DATE,
Revenue INT,
BurntEffort INT,
UCPCPFPOrg INT,
UCPCPFPCur INT
)
GO

IF EXISTS(SELECT 1 FROM Sys.Tables WHERE NAME = 'ProjectQuality')
BEGIN
DROP TABLE ProjectQuality
END
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE ProjectQuality
(
ProjectId INT,
CodeReviewTotal INT,
CodeReviewClosed INT,
UTDefectsTotal INT,
UTDefectsClosed INT,
SITDefectsTotal INT,
SITDefectsClosed INT,
UATDefectsTotal INT,
UATDefectsClosed INT,
SITTestcases INT,
SITCompletion INT,
UATTestcases INT,
UATCompletion INT,
UnitTestTool VARCHAR(30),
UnitTestCode VARCHAR(20)
)
GO

IF EXISTS(SELECT 1 FROM Sys.Tables WHERE NAME = 'CodeAnalysisDefects')
BEGIN
DROP TABLE CodeAnalysisDefects
END
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE CodeAnalysisDefects
(
ProjectId INT,
Critical VARCHAR(20),
Blocker VARCHAR(20),
Major VARCHAR(20),
Minor VARCHAR(20)
)
GO

IF EXISTS(SELECT 1 FROM Sys.Tables WHERE NAME = 'ProjectRisk')
BEGIN
DROP TABLE ProjectRisk
END
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE ProjectRisk
(
ProjectId INT,
Risk INT,
OpenRisks INT,
ActionPlan VARCHAR(100),
SupportRequests VARCHAR(100),
)
GO

IF EXISTS(SELECT 1 FROM Sys.Tables WHERE NAME = 'Milestones')
BEGIN
DROP TABLE Milestones
END
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE Milestones
(
ProjectId INT,
Successful INT,
Missed INT,
Upcoming VARCHAR(20),
Deferred VARCHAR(20)
)
GO

