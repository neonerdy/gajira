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
    public class OverTimeController : Controller
    {

        private AppDbContext context;
        public OverTimeController() {
            context = new AppDbContext();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var overtimes = await context.OverTimes
                .ToListAsync();
            
            return Ok(overtimes);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var overtime = await context.OverTimes.FindAsync(id);
            return Ok(overtime);
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] OverTime overtime)
        {
            overtime.ID = Guid.NewGuid();
            overtime.CreatedDate = DateTime.Now;
            context.Add(overtime);

            var result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] OverTime overtime)
        {
            overtime.ModifiedDate = DateTime.Now;
            context.Update(overtime);

            var result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var overtime = await context.OverTimes.FindAsync(id);
            context.Remove(overtime);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }



    }


}