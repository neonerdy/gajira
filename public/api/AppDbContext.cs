
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

using Gajira.Models;

namespace Gajira
{
    public class AppDbContext : DbContext
    {
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<Branch> Branches { get; set; }
        public DbSet<Department> Departments { get; set; }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseNpgsql("host=localhost;database=gajira;username=postgres;password=password123");
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Announcement>(entity => 
            {
                entity.ToTable("Announcements");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.Title).HasColumnName("Title");
                entity.Property(e => e.Date).HasColumnName("Date");
                entity.Property(e => e.Message).HasColumnName("Message");
            });

            modelBuilder.Entity<Attendance>(entity => 
            {
                entity.ToTable("Attendances");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeId");
                entity.Property(e => e.WorkScheduleId).HasColumnName("WorkScheduleId");
                entity.Property(e => e.AttendanceDate).HasColumnName("AttendanceDate");
                entity.Property(e => e.ClockIn).HasColumnName("ClockIn");
                entity.Property(e => e.ClockOut).HasColumnName("ClockOut");
                entity.Property(e => e.Status).HasColumnName("Status");
                entity.Property(e => e.LateDuration).HasColumnName("LateDuration");
                entity.Property(e => e.Note).HasColumnName("Note");
            });

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


            modelBuilder.Entity<Employee>(entity => 
            {
                entity.ToTable("Employees");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.EmployeeCode).HasColumnName("EmployeeCode");
                entity.Property(e => e.EmployeeName).HasColumnName("EmployeeName");
                entity.Property(e => e.BirthDate).HasColumnName("BirthDate");
                entity.Property(e => e.BirthPlace).HasColumnName("BirthPlace");
                entity.Property(e => e.Address).HasColumnName("Address");
                entity.Property(e => e.City).HasColumnName("City");
                entity.Property(e => e.Province).HasColumnName("Province");
                entity.Property(e => e.ZipCode).HasColumnName("ZipCode");
                entity.Property(e => e.Nationality).HasColumnName("Nationality");
                entity.Property(e => e.NationalIdentityId).HasColumnName("NationalIdentityId");
                entity.Property(e => e.Phone).HasColumnName("Phone");
                entity.Property(e => e.Email).HasColumnName("Email");
                entity.Property(e => e.Gender).HasColumnName("Gender");
                entity.Property(e => e.Religion).HasColumnName("Religion");
                entity.Property(e => e.MaritalStatus).HasColumnName("MaritalStatus");
                entity.Property(e => e.NumberOfChilds).HasColumnName("NumberOfChilds");
                entity.Property(e => e.BloodType).HasColumnName("BloodType");
                entity.Property(e => e.BranchId).HasColumnName("BranchId");
                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentId");
                entity.Property(e => e.JobTitleId).HasColumnName("JobTitleId");
                entity.Property(e => e.JoinDate).HasColumnName("JoinDate");
                entity.Property(e => e.ResignDate).HasColumnName("ResignDate");
                entity.Property(e => e.EmploymentStatus).HasColumnName("EmploymentStatus");
                entity.Property(e => e.ApprovalLineId).HasColumnName("ApprovalLineId");
                entity.Property(e => e.BasicSalary).HasColumnName("BasicSalary");
                entity.Property(e => e.PaymentType).HasColumnName("PaymentType");
                entity.Property(e => e.BankName).HasColumnName("BankName");
                entity.Property(e => e.BankAccount).HasColumnName("BankAccount");
                entity.Property(e => e.NPWP).HasColumnName("NPWP");
                entity.Property(e => e.Photo).HasColumnName("Photo");
                entity.Property(e => e.Photo).HasColumnName("CreatedDate");
                entity.Property(e => e.Photo).HasColumnName("ModifiedDate");
            });


            modelBuilder.Entity<EmployeeCourse>(entity => 
            {
                entity.ToTable("EmployeeCourses");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeId");
                entity.Property(e => e.CourseName).HasColumnName("CourseName");
                entity.Property(e => e.Provider).HasColumnName("Provider");
                entity.Property(e => e.StartDate).HasColumnName("StartDate");
                entity.Property(e => e.EndDate).HasColumnName("EndDate");
                entity.Property(e => e.Duration).HasColumnName("Duration");
                entity.Property(e => e.IsCertified).HasColumnName("IsCertified");
            });


            modelBuilder.Entity<EmployeeEducation>(entity => 
            {
                entity.ToTable("EmployeeEducations");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeId");
                entity.Property(e => e.Grade).HasColumnName("Grade");
                entity.Property(e => e.InstitutionName).HasColumnName("InstitutionName");
                entity.Property(e => e.Majors).HasColumnName("Majors");
                entity.Property(e => e.StartYear).HasColumnName("StartYear");
                entity.Property(e => e.EndYear).HasColumnName("EndYear");
            });


            modelBuilder.Entity<EmployeeFamily>(entity => 
            {
                entity.ToTable("EmployeeFamilies");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeId");
                entity.Property(e => e.FamilyName).HasColumnName("FamilyName");
                entity.Property(e => e.Relationship).HasColumnName("Relationship");
                entity.Property(e => e.MaritalStatus).HasColumnName("MaritalStatus");
                entity.Property(e => e.Address).HasColumnName("Address");
                entity.Property(e => e.Phone).HasColumnName("Phone");
                entity.Property(e => e.IsEmergencyContact).HasColumnName("IsEmergencyContact");
            });

            modelBuilder.Entity<EmployeeSalary>(entity => 
            {
                entity.ToTable("EmployeeSalaries");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeId");
                entity.Property(e => e.SalaryComponentId).HasColumnName("SalaryComponentId");
                entity.Property(e => e.Amount).HasColumnName("Amount");
            });


            modelBuilder.Entity<Event>(entity => 
            {
                entity.ToTable("Events");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.EventName).HasColumnName("EventName");
                entity.Property(e => e.Category).HasColumnName("Category");
                entity.Property(e => e.StartTime).HasColumnName("StartTime");
                entity.Property(e => e.EndTime).HasColumnName("EndTime");
                entity.Property(e => e.Note).HasColumnName("Note");
            });

            
            modelBuilder.Entity<File>(entity => 
            {
                entity.ToTable("Files");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.FileName).HasColumnName("FileName");
                entity.Property(e => e.Type).HasColumnName("Type");
                entity.Property(e => e.Size).HasColumnName("Size");
                entity.Property(e => e.UploadedDate).HasColumnName("UploadedDate");
                entity.Property(e => e.UploaderId).HasColumnName("UploaderId");
            });


            modelBuilder.Entity<JobTitle>(entity => 
            {
                entity.ToTable("JobTitles");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.JobTitleName).HasColumnName("JobTitleName");
                entity.Property(e => e.Description).HasColumnName("Description");
            });


            modelBuilder.Entity<Leave>(entity => 
            {
                entity.ToTable("Leaves");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeId");
                entity.Property(e => e.LeaveTypeId).HasColumnName("LeaveTypeId");
                entity.Property(e => e.StartDate).HasColumnName("StartDate");
                entity.Property(e => e.EndDate).HasColumnName("EndDate");
                entity.Property(e => e.Note).HasColumnName("Note");
                entity.Property(e => e.Status).HasColumnName("Status");
                entity.Property(e => e.CreatedDate).HasColumnName("CreatedDate");
                entity.Property(e => e.ModifiedDate).HasColumnName("ModifiedDate");
                entity.Property(e => e.ApprovedDate).HasColumnName("ApprovedDate");
                entity.Property(e => e.IsTaken).HasColumnName("IsTaken");
            });


            modelBuilder.Entity<LeaveType>(entity => 
            {
                entity.ToTable("LeaveTypes");
                entity.Property(e => e.ID).HasColumnName("ID");
                entity.Property(e => e.LeaveTypeName).HasColumnName("LeaveTypeName");
                entity.Property(e => e.DaysGiven).HasColumnName("DaysGiven");
                entity.Property(e => e.IsDeduction).HasColumnName("IsDeduction");
                entity.Property(e => e.Note).HasColumnName("Note");
            });




            









        }

    }


}