
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
        public DbSet<WorkCalendar> WorkCalendars { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<SalaryComponent> SalaryComponents { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<OverTime> OverTimes { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeeSalary> EmployeeSalaries { get; set; }
       
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseNpgsql("host=localhost;database=gajira;username=postgres;password=password123");
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Branch>(entity => 
            {
                entity.ToTable("branches");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.BranchName).HasColumnName("branch_name");
                entity.Property(e => e.BranchHead).HasColumnName("branch_head");
            });


            modelBuilder.Entity<Department>(entity => 
            {
                entity.ToTable("departments");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.DepartmentName).HasColumnName("department_name");
                entity.Property(e => e.DepartmentHead).HasColumnName("department_head");
            });



            modelBuilder.Entity<JobTitle>(entity => 
            {
                entity.ToTable("job_titles");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.TitleName).HasColumnName("title_name");
                entity.Property(e => e.Description).HasColumnName("description");
            });


             modelBuilder.Entity<SalaryComponent>(entity => 
            {
                entity.ToTable("salary_components");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.ComponentName).HasColumnName("component_name");
                entity.Property(e => e.Occurance).HasColumnName("occurance");
                entity.Property(e => e.DefaultValue).HasColumnName("default_value");
            });


            modelBuilder.Entity<WorkCalendar>(entity => 
            {
                entity.ToTable("work_caalendars");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.Month).HasColumnName("month");
                entity.Property(e => e.Year).HasColumnName("year");
                entity.Property(e => e.WorkDay).HasColumnName("work_day");
                entity.Property(e => e.OffDay).HasColumnName("off_day");
            });


          
            modelBuilder.Entity<Attendance>(entity => 
            {
                entity.ToTable("attendances");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.Month).HasColumnName("month");
                entity.Property(e => e.Year).HasColumnName("year");
                entity.Property(e => e.StartDate).HasColumnName("start_date");
                entity.Property(e => e.EndDate).HasColumnName("end_date");
                entity.Property(e => e.EmployeeId).HasColumnName("employee_id");
                entity.Property(e => e.WorkDay).HasColumnName("work_day");
                entity.Property(e => e.LeaveDay).HasColumnName("onleave_day");
                entity.Property(e => e.OffDay).HasColumnName("off_day");
                entity.Property(e => e.Total).HasColumnName("total");
                entity.Property(e => e.CreatedDate).HasColumnName("created_date");
                entity.Property(e => e.ModifiedDate).HasColumnName("modified_date");
            });


            modelBuilder.Entity<OverTime>(entity => 
            {
                entity.ToTable("overtimes");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.EmployeeId).HasColumnName("employee_id");
                entity.Property(e => e.Month).HasColumnName("month");
                entity.Property(e => e.Year).HasColumnName("year");
                entity.Property(e => e.DayType).HasColumnName("day_type");
                entity.Property(e => e.OverTimeDate).HasColumnName("overtime_date");
                entity.Property(e => e.StartHour).HasColumnName("start_hour");
                entity.Property(e => e.EndHour).HasColumnName("end_hour");
                entity.Property(e => e.TotalInMinute).HasColumnName("total_in_minute");
                entity.Property(e => e.TotalInHour).HasColumnName("total_in_hour");
                entity.Property(e => e.Amount).HasColumnName("amount");
                entity.Property(e => e.CreatedDate).HasColumnName("created_date");
                entity.Property(e => e.ModifiedDate).HasColumnName("modified_date");
            });



       
            modelBuilder.Entity<Employee>(entity => 
            {
                entity.ToTable("employees");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.EmployeeCode).HasColumnName("employee_code");
                entity.Property(e => e.EmployeeName).HasColumnName("employee_name");
                entity.Property(e => e.BranchId).HasColumnName("branch_id");
                entity.Property(e => e.DepartmentId).HasColumnName("department_id");
                entity.Property(e => e.JobTitleId).HasColumnName("job_title_id");
                entity.Property(e => e.BirthDate).HasColumnName("birth_date");
                entity.Property(e => e.JoinDate).HasColumnName("join_date");
                entity.Property(e => e.Gender).HasColumnName("gender");
                entity.Property(e => e.Address).HasColumnName("address");
                entity.Property(e => e.City).HasColumnName("city");
                entity.Property(e => e.Province).HasColumnName("province");
                entity.Property(e => e.Phone).HasColumnName("phone");
                entity.Property(e => e.Email).HasColumnName("email");
                entity.Property(e => e.Religion).HasColumnName("religion");
                entity.Property(e => e.MaritalStatus).HasColumnName("marital_status");
                entity.Property(e => e.NumberOfChilds).HasColumnName("number_of_childs");
                entity.Property(e => e.PaymentType).HasColumnName("payment_type");
                entity.Property(e => e.BankName).HasColumnName("bank_name");
                entity.Property(e => e.AccountNumber).HasColumnName("account_number");
                entity.Property(e => e.NationalIdentificationNumber).HasColumnName("national_id_number");
                entity.Property(e => e.TaxIdentificationNumber).HasColumnName("tax_id_number");
                entity.Property(e => e.EmployeeStatus).HasColumnName("employee_status");
                entity.Property(e => e.Photo).HasColumnName("photo");
                entity.Property(e => e.CreatedDate).HasColumnName("created_date");
                entity.Property(e => e.ModifiedDate).HasColumnName("modified_date");
            });


            modelBuilder.Entity<EmployeeSalary>(entity => 
            {
                entity.ToTable("employee_salaries");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.EmployeeId).HasColumnName("employee_id");
                entity.Property(e => e.SalaryComponentId).HasColumnName("salary_component_id");
                entity.Property(e => e.Amount).HasColumnName("amount");
            });

          

            modelBuilder.Entity<User>(entity => 
            {
                entity.ToTable("users");
                entity.Property(e => e.ID).HasColumnName("id");
                entity.Property(e => e.UserName).HasColumnName("user_name");
                entity.Property(e => e.Password).HasColumnName("password");
                entity.Property(e => e.FullName).HasColumnName("full_name");
                entity.Property(e => e.IsAdministrator).HasColumnName("is_administrator");
                
            });


        }

    }


}