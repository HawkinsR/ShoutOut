using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoutOut.API.Data;

namespace ShoutOut.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DBContext _context;

        public UserController(DBContext context)
        {
            _context = context;
        }

        // GET: api/<UserController>
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUserss()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return BadRequest("User not found.");
            return Ok(user);
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<List<User>>> UpdateUser(User change)
        {
            var user = await _context.Users.FindAsync(change.UserId);
            if (user == null)
                return BadRequest("ShoutOut not found.");

            user.UserName = change.UserName;
            user.UserEmail = change.UserEmail;

            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync()); 
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<User>>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return BadRequest("User not found.");

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
    }
}
