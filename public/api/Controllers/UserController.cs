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
    public class UserController : Controller
    {

        private AppDbContext context;

        public UserController(){
            context = new AppDbContext();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await context.Users.ToListAsync();
            return Ok(users);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var user = await context.Users.FindAsync(id);
            return Ok(user);
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] User user)
        {
            user.ID = Guid.NewGuid();
            context.Add(user);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] User user)
        {
            context.Update(user);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var user = await context.Users.FindAsync(id);
            context.Remove(user);
            var result = await context.SaveChangesAsync();

            return Ok(result);
        }

        

    }


}