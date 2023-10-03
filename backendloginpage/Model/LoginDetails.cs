namespace backendloginpage.Model
{
    public class LoginDetails
    {
        public int Id { get; set; }
        public string  Name { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public DateTime? CreatedDTM { get; set; }
        public string? Createdby { get; set; }
        public DateTime? UpdatedDTM { get; set; }
        public string? Updatedby { get; set;}
        public int IsActive { get; set; }
    }
}
