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
    public class AttendenceController : Controller
    {

        private AppDbContext context;

        public AttendenceController() {
            context = new AppDbContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var attendances = await context.Attendances.ToListAsync();
            return Ok(attendances);
        }

        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var attendance = await context.Attendances.FindAsync(id);
            return Ok(attendance);
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] Attendance attendance)
        {
            attendance.ID = Guid.NewGuid();
            context.Add(attendance);

            var result = await context.SaveChangesAsync();

            return Ok(result);
            
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Attendance attendance)
        {
            context.Update(attendance);

            var result = await context.SaveChangesAsync();

            return Ok(result);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var attendance = await context.Attendances.FindAsync(id);
            context.Remove(attendance);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }





    }


}