using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoutOut.API.Data;
using ShoutOut.API.Models;

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
        public async Task<ActionResult<List<DTO_ShoutOut>>> GetAllShouts()
        {
            var dbList = await _context.Shouts.ToListAsync(); 
            if (dbList == null)
                return BadRequest("ShoutOuts not found.");

            var shoutList = new List<DTO_ShoutOut>();

            foreach (var shout in dbList)
            { shoutList.Add(new DTO_ShoutOut(shout.SOId,
                                                shout.SODateTime,
                                                shout.SOTitle,
                                                shout.SOComment,
                                                shout.SOEdited,
                                                shout.SOEditDateTime,
                                                shout.UserId)); }

            return Ok(shoutList);
        }

        // GET api/<ShoutOutController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DTO_ShoutOut>> GetShout(int id)
        {
            var dbShout = await _context.Shouts.FindAsync(id);

            if (dbShout == null)
                return BadRequest("ShoutOut not found.");

            var shout = new DTO_ShoutOut(dbShout.SOId,
                                            dbShout.SODateTime,
                                            dbShout.SOTitle,
                                            dbShout.SOComment,
                                            dbShout.SOEdited,
                                            dbShout.SOEditDateTime,
                                            dbShout.UserId);        
            return Ok(shout);
        }

        // POST api/<ShoutOutController>
        [HttpPost]
        public async Task<ActionResult<List<DTO_ShoutOut>>> AddShout(DTO_ShoutOut DTO_shout)
        {
            var dbUser = await _context.Users.FindAsync(DTO_shout.UserId);

            if (dbUser == null)
            {
                var newUser = new User();
                newUser.UserId = DTO_shout.UserId;
                newUser.UserName = DTO_shout.UserName;
                newUser.UserEmail = DTO_shout.UserEmail;
                _context.Users.Add(newUser);
                await _context.SaveChangesAsync();
            }
            



            var shout = new ShoutOut();
            
            shout.SOId = null;
            shout.SODateTime = DTO_shout.SODateTime;
            shout.SOTitle = DTO_shout.SOTitle;
            shout.SOComment = DTO_shout.SOComment;
            shout.SOEdited = DTO_shout.SOEdited;
            shout.SOEditDateTime = DTO_shout.SOEditDateTime;
            shout.UserId = DTO_shout.UserId;


            
            _context.Shouts.Add(shout);
            await _context.SaveChangesAsync();

            return Ok(await _context.Shouts.ToListAsync());
        }

        // PUT api/<ShoutOutController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<List<DTO_ShoutOut>>> UpdateShout(DTO_ShoutOut DTO_change)
        {
            var shout = await _context.Shouts.FindAsync(DTO_change.SOId);
            if (shout == null)
                return BadRequest("ShoutOut not found.");

            shout.SOTitle = DTO_change.SOTitle;
            shout.SOComment = DTO_change.SOComment;
            shout.SOEdited = true;
            shout.SOEditDateTime = DateTime.Now;

            await _context.SaveChangesAsync();

            return Ok(await _context.Shouts.ToListAsync()); 
        }

        // DELETE api/<ShoutOutController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<DTO_ShoutOut>>> DeleteShout(int id)
        {
            var dbShout = await _context.Shouts.FindAsync(id);
            if (dbShout == null)
                return BadRequest("ShoutOut not found.");

            _context.Shouts.Remove(dbShout);
            await _context.SaveChangesAsync();

            var dbList = await _context.Shouts.ToListAsync();
            if (dbList == null)
                return BadRequest("ShoutOuts not found.");

            var shoutList = new List<DTO_ShoutOut>();

            foreach (var shout in dbList)
            { shoutList.Add(new DTO_ShoutOut(shout.SOId,
                                                shout.SODateTime,
                                                shout.SOTitle,
                                                shout.SOComment,
                                                shout.SOEdited,
                                                shout.SOEditDateTime,
                                                shout.UserId));
            }
            return Ok(shoutList);
        }
    }
}
