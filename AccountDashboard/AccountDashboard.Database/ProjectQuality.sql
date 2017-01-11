CREATE TABLE [dbo].[ProjectQuality]
(
QualityId INT NOT NULL PRIMARY KEY,
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
