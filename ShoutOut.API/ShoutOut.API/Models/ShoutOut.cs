using System.ComponentModel.DataAnnotations;

namespace ShoutOut.API
{
    public class ShoutOut
    {
        [Key]
        public int? SOId { get; set; }
        public DateTime SODateTime { get; set; }
        public string SOTitle { get; set; } = string.Empty;
        public string SOComment { get; set; } = string.Empty;
        public bool SOEdited { get; set; } = false;
        public DateTime SOEditDateTime { get; set; }
        public int UserId { get; set; }
    }
}
