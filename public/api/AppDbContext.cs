
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

using Gajira.Models;

namespace Gajira
{
    public class AppDbContext : DbContext
    {

        public DbSet<Branch> Branches { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<JobTitle> JobTitles { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseNpgsql("host=localhost;database=gajira;username=postgres;password=password123");
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Branch>(entity => 
            {
                entity.ToTable("Branches");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.BranchName).HasColumnName("BranchName");
                entity.Property(e => e.Province).HasColumnName("Province");
                entity.Property(e => e.City).HasColumnName("City");
            });


            modelBuilder.Entity<Department>(entity => 
            {
                entity.ToTable("Departments");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.DepartmentName).HasColumnName("DepartmentName");
                entity.Property(e => e.Description).HasColumnName("Description");
                
            });


            modelBuilder.Entity<JobTitle>(entity => 
            {
                entity.ToTable("JobTitles");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.JobTitleName).HasColumnName("JobTitleName");
                entity.Property(e => e.Description).HasColumnName("Description");
            });



        }

    }


}