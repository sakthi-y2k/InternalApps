using System;
using System.Collections.Generic;
using System.Data.OleDb;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AccountDashboard.Service.Controllers
{
    public class ExcelController : ApiController
    {
        SqlBulkCopy oSqlBulk = null;
        [HttpPost()]
        public void UploadFiles()
        {
            //FIRST, SAVE THE SELECTED FILE IN THE ROOT DIRECTORY.

            string ConStr = String.Format(@"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\394107\Documents\Ford_Delivery_Tracker_Dash.xlsx;Extended Properties=""Excel 12.0 Xml;HDR=YES;IMEX=1""");

            // SET A CONNECTION WITH THE EXCEL FILE.
            OleDbConnection myExcelConn = new OleDbConnection(ConStr);
            try
            {
                myExcelConn.Open();

                OleDbExecute(myExcelConn, "Project");
                OleDbExecute(myExcelConn, "Milestone");
                OleDbExecute(myExcelConn, "BudgetTimeline");
                OleDbExecute(myExcelConn, "CodeAnalysis");
                OleDbExecute(myExcelConn, "Quality");
                OleDbExecute(myExcelConn, "Risk");

            }
            catch (Exception ex)
            {


            }
            finally
            {
                // CLEAR.
                oSqlBulk.Close();
                oSqlBulk = null;
                myExcelConn.Close();
                myExcelConn = null;
            }


        }

        private void OleDbExecute(OleDbConnection myExcelConn, string destinationTable)
        {

            string query = "Select * from [Project Details$A2:ZZ] where [Project ID] is not null";
            OleDbCommand objOleDB = new OleDbCommand(query, myExcelConn);

            // READ THE DATA EXTRACTED FROM THE EXCEL FILE.
            OleDbDataReader objBulkReader = null;
            objBulkReader = objOleDB.ExecuteReader();

            // SET THE CONNECTION STRING.
            string sCon = @"Data Source=.\SQLEXP2008R2FW;Initial Catalog=Sample;Integrated Security=SSPI";

            using (SqlConnection con = new SqlConnection(sCon))
            {
                con.Open();

                // FINALLY, LOAD DATA INTO THE DATABASE TABLE.
                SqlBulkCopy oSqlBulk;
                oSqlBulk = BulkCopy(con, destinationTable);
                oSqlBulk.WriteToServer(objBulkReader);
            }


        }

        private SqlBulkCopy BulkCopy(SqlConnection con, string destinationTable)
        {
            switch (destinationTable)
            {
                case "Project": return Project(con, destinationTable);
                    break;

                case "Milestone": return Milestone(con, destinationTable);
                    break;

                case "BudgetTimeline": return TimelineBudget(con, destinationTable);
                    break;

                case "CodeAnalysis": return CodeAnalysis(con, destinationTable);
                    break;

                case "Quality": return Quality(con, destinationTable);
                    break;

                case "Risk": return Risk(con, destinationTable);
                    break;
            }
            return null;
        }

        private SqlBulkCopy Project(SqlConnection con, string destinationTable)
        {
            oSqlBulk = new SqlBulkCopy(con);
            oSqlBulk.ColumnMappings.Add(1, 1);
            oSqlBulk.ColumnMappings.Add(2, 2);
            oSqlBulk.ColumnMappings.Add(3, 3);
            oSqlBulk.ColumnMappings.Add(4, 4);
            oSqlBulk.ColumnMappings.Add(5, 5);
            oSqlBulk.ColumnMappings.Add(6, 6);
            oSqlBulk.ColumnMappings.Add(7, 7);
            oSqlBulk.ColumnMappings.Add(8, 8);
            oSqlBulk.ColumnMappings.Add(9, 9);
            oSqlBulk.DestinationTableName = "Project"; // TABLE NAME.
            return oSqlBulk;
        }

        private SqlBulkCopy Milestone(SqlConnection con, string destinationTable)
        {
            oSqlBulk = new SqlBulkCopy(con);
            oSqlBulk.ColumnMappings.Add(1, 1);
            oSqlBulk.ColumnMappings.Add(11, 4);
            oSqlBulk.ColumnMappings.Add(12, 5);
            oSqlBulk.ColumnMappings.Add(13, 6);
            oSqlBulk.ColumnMappings.Add(14, 7);
            oSqlBulk.DestinationTableName = "Milestone";
            return oSqlBulk;
        }


        private SqlBulkCopy TimelineBudget(SqlConnection con, string destinationTable)
        {
            oSqlBulk = new SqlBulkCopy(con);
            oSqlBulk.ColumnMappings.Add(15, 2);
            oSqlBulk.ColumnMappings.Add(16, 3);
            oSqlBulk.ColumnMappings.Add(17, 4);
            oSqlBulk.ColumnMappings.Add(18, 5);
            oSqlBulk.ColumnMappings.Add(19, 6);
            oSqlBulk.ColumnMappings.Add(20, 7);
            oSqlBulk.DestinationTableName = "BudgetTimeline";
            return oSqlBulk;
        }



        private SqlBulkCopy Quality(SqlConnection con, string destinationTable)
        {
            oSqlBulk = new SqlBulkCopy(con);
            oSqlBulk.ColumnMappings.Add(21, 2);
            oSqlBulk.ColumnMappings.Add(22, 3);
            oSqlBulk.ColumnMappings.Add(23, 4);
            oSqlBulk.ColumnMappings.Add(24, 5);
            oSqlBulk.ColumnMappings.Add(25, 6);
            oSqlBulk.ColumnMappings.Add(26, 7);
            oSqlBulk.ColumnMappings.Add(27, 8);
            oSqlBulk.ColumnMappings.Add(28, 9);
            oSqlBulk.ColumnMappings.Add(29, 10);
            oSqlBulk.ColumnMappings.Add(30, 11);
            oSqlBulk.ColumnMappings.Add(31, 12);
            oSqlBulk.ColumnMappings.Add(32, 13);
            oSqlBulk.ColumnMappings.Add(33, 14);
            oSqlBulk.ColumnMappings.Add(34, 15);
            oSqlBulk.DestinationTableName = "Quality";
            return oSqlBulk;
        }

        private SqlBulkCopy CodeAnalysis(SqlConnection con, string destinationTable)
        {
            oSqlBulk = new SqlBulkCopy(con);
            oSqlBulk.ColumnMappings.Add(35, 3);
            oSqlBulk.ColumnMappings.Add(36, 4);
            oSqlBulk.ColumnMappings.Add(37, 5);
            oSqlBulk.ColumnMappings.Add(38, 6);
            oSqlBulk.DestinationTableName = "CodeAnalysis";
            return oSqlBulk;
        }

        private SqlBulkCopy Risk(SqlConnection con, string destinationTable)
        {
            oSqlBulk = new SqlBulkCopy(con);
            oSqlBulk.ColumnMappings.Add(39, 2);
            oSqlBulk.ColumnMappings.Add(40, 3);
            oSqlBulk.ColumnMappings.Add(41, 4);
            oSqlBulk.ColumnMappings.Add(42, 5);
            oSqlBulk.DestinationTableName = "Risk";
            return oSqlBulk;
        }
    }
}
