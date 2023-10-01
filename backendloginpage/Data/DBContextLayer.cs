
using backendloginpage.Model;
using Microsoft.EntityFrameworkCore;

namespace backendloginpage.Data
{
    public class DBContextLayer : DbContext
    {
        public DBContextLayer(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }

        public DbSet<LoginDetails> M_User { get; set; }
    }
}
