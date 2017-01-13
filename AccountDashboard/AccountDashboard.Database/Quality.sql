CREATE TABLE [dbo].[Quality]
(
Id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
MileStoneId INT NOT NULL FOREIGN KEY REFERENCES Milestone(Id),
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
UTToolName VARCHAR(30),
UTCodeCoverage INT
)
