﻿CREATE TABLE [dbo].[Milestone]
(
MilestoneId INT NOT NULL PRIMARY KEY,
ProjectId INT,
Successful INT,
Missed INT,
Upcoming VARCHAR(20),
Deferred VARCHAR(20)
)
