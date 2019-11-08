using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Gajira.Models;


namespace Gajira.Controllers
{
    [Route("api/[controller]/[action]")]
    public class SalaryComponentController : Controller
    {

        private AppDbContext context;

        public SalaryComponentController(){
            context = new AppDbContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var salaryComponents = await context.SalaryComponents.ToListAsync();
            return Ok(salaryComponents);
        }

        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var salaryComponent = await context.SalaryComponents.FindAsync(id);
            return Ok(salaryComponent);
        }

        [HttpPost]
        public async Task<IActionResult> Save([FromBody] SalaryComponent salaryComponent)
        {
            salaryComponent.ID = Guid.NewGuid();
            context.Add(salaryComponent);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPost]
        public async Task<IActionResult> Update([FromBody] SalaryComponent salaryComponent)
        {
            context.Update(salaryComponent);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var salaryComponent = await context.SalaryComponents.FindAsync(id);
            context.Remove(salaryComponent);
            int result = await context.SaveChangesAsync();

            return Ok(result);
        }



    }


}