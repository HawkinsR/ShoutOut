namespace ShoutOut.API.Models
{
    public class DTO_ShoutOut
    {
        public int? SOId { get; set; }
        public DateTime SODateTime { get; set; }
        public string SOTitle { get; set; } = string.Empty;
        public string SOComment { get; set; } = string.Empty;
        public bool SOEdited { get; set; } = false;
        public DateTime SOEditDateTime { get; set; }
        public string UserId { get; set; } = string.Empty;
        public string? UserName { get; set; } = string.Empty;
        public string? UserEmail { get; set; } = string.Empty;

        public DTO_ShoutOut() { }

        public DTO_ShoutOut(int? SOId, DateTime SODateTime, string SOTitle, string SOComment, bool SOEdited, DateTime SOEditDateTime, string UserId)
        {
            this.SOId = SOId;
            this.SODateTime = SODateTime;
            this.SOTitle = SOTitle;
            this.SOComment = SOComment;
            this.SOEdited = SOEdited;
            this.SOEditDateTime = SOEditDateTime;
            this.UserId = UserId;
        }
    }
}

