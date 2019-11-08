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
    public class BranchController : Controller
    {

        private AppDbContext context;

        public BranchController() {
            context = new AppDbContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var employees = await context.Branches
                .OrderBy(b=>b.BranchName)
                .ToListAsync();
            
            return Ok(employees);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var employee = await context.Branches.FindAsync(id);
            return Ok(employee);
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] Branch branch)
        {
            branch.ID = Guid.NewGuid();
            context.Add(branch);
            int result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Branch branch)
        {
            context.Update(branch);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var branch = await context.Branches.FindAsync(id);
            context.Remove(branch);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }



        

    }



}