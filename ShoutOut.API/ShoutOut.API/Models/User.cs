using System.ComponentModel.DataAnnotations;

namespace ShoutOut.API
{
    public class User
    {
        [Key]
        public string UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string UserEmail { get; set; } = string.Empty;

        public List<ShoutOut> ShoutOuts { get; set; }
    }
}
