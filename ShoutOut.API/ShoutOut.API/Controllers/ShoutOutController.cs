using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoutOut.API.Data;

namespace ShoutOut.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoutOutController : ControllerBase
    {
        private readonly DBContext _context;

        public ShoutOutController(DBContext context)
        {
            _context = context;
        }

        // GET: api/<ShoutOutController>
        [HttpGet]
        public async Task<ActionResult<List<ShoutOut>>> GetAllShouts()
        {
            return Ok(await _context.Shouts.ToListAsync());
        }

        // GET api/<ShoutOutController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShoutOut>> GetShout(int id)
        {
            var shout = await _context.Shouts.FindAsync(id);
            if (shout == null)
                return BadRequest("ShoutOut not found.");
            return Ok(shout);
        }

        // POST api/<ShoutOutController>
        [HttpPost]
        public async Task<ActionResult<List<ShoutOut>>> AddShout(ShoutOut shout)
        {
            shout.SOId = null;
            _context.Shouts.Add(shout);
            await _context.SaveChangesAsync();

            return Ok(await _context.Shouts.ToListAsync());
        }

        // PUT api/<ShoutOutController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<List<ShoutOut>>> UpdateShout(ShoutOut change)
        {
            var shout = await _context.Shouts.FindAsync(change.SOId);
            if (shout == null)
                return BadRequest("ShoutOut not found.");

            shout.SOTitle = change.SOTitle;
            shout.SOComment = change.SOComment;
            shout.SOEdited = true;
            shout.SOEditDateTime = DateTime.Now;

            await _context.SaveChangesAsync();

            return Ok(await _context.Shouts.ToListAsync()); 
        }

        // DELETE api/<ShoutOutController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<ShoutOut>>> DeleteShout(int id)
        {
            var shout = await _context.Shouts.FindAsync(id);
            if (shout == null)
                return BadRequest("ShoutOut not found.");

            _context.Shouts.Remove(shout);
            await _context.SaveChangesAsync();

            return Ok(await _context.Shouts.ToListAsync());
        }
    }
}
