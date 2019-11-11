using System;
using System.Collections.Generic;

namespace Gajira.Models
{
    public class Employee
    {
        public Guid ID { get; set; }
        public string EmployeeCode { get; set; }
        public string EmployeeName { get; set; }
        public Guid BranchId { get; set; }
        public Branch Branch { get; set; }
        public Guid DepartmentId { get; set; }
        public Department Department { get; set; }
        public Guid JobTitleId { get; set; }
        public JobTitle JobTitle { get; set; }
        public DateTime JoinDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        
        
        public string NationalIdentificationNumber { get; set; }
     
        public DateTime BirthDate { get; set; }
        public string Gender { get; set; }
        public string Religion { get; set; }
        public string MaritalStatus { get; set; }
        public int NumberOfChilds { get; set; }


        public string PaymentType { get; set; }
        public string BankName { get; set; }
        public string AccountNumber { get; set; }
        public string TaxIdentificationNumber { get; set; }
        
        public string EmployeeStatus { get; set; }
        public string Photo { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        

    }


}