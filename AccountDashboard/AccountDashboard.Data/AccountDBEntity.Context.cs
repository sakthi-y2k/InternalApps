﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AccountDashboard.Data
{
    using Model;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;

    public partial class AccountDBContext : DbContext
    {
        public AccountDBContext()
            : base("AccountDBContext")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<BudgetTimeline> BudgetTimeline { get; set; }
        public virtual DbSet<CodeAnalysis> CodeAnalysis { get; set; }
        public virtual DbSet<CodeAnalysisType> CodeAnalysisType { get; set; }
        public virtual DbSet<Milestone> Milestone { get; set; }
        public virtual DbSet<MilestoneStatus> MilestoneStatus { get; set; }
        public virtual DbSet<MilestoneType> MilestoneType { get; set; }
        public virtual DbSet<Project> Project { get; set; }
        public virtual DbSet<Quality> Quality { get; set; }
        public virtual DbSet<Risk> Risk { get; set; }
    }
}