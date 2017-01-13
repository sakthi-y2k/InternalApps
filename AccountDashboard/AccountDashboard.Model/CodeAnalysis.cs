//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AccountDashboard.Model
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class CodeAnalysis
    {
        [Key]
        public int Id { get; set; }
        public int MileStoneId { get; set; }
        public int AnalysisTypeId { get; set; }
        public string Critical { get; set; }
        public string Blocker { get; set; }
        public string Major { get; set; }
        public string Minor { get; set; }
    
        public virtual CodeAnalysisType CodeAnalysisType { get; set; }
        public virtual Milestone Milestone { get; set; }
    }
}
