using Microsoft.EntityFrameworkCore;

namespace ShoutOut.API.Data
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }

        public DbSet<ShoutOut> Shouts { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
