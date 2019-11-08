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
    public class WorkCalendarController : Controller
    {

        private AppDbContext context;

        public WorkCalendarController(){
            context = new AppDbContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var workCalendars = await context.WorkCalendars.ToListAsync();
            return Ok(workCalendars);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {   
            var workCalendar = await context.WorkCalendars.FindAsync(id);
            return Ok(workCalendar);
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] WorkCalendar workCalendar)
        {
            workCalendar.ID = Guid.NewGuid();
            context.Add(workCalendar);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] WorkCalendar workCalendar)
        {
            context.Update(workCalendar);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var workCalendar = await context.WorkCalendars.FindAsync(id);
            context.Remove(workCalendar);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }

               


    
    }


}