using backendloginpage.Data;
using backendloginpage.DTO;
using backendloginpage.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backendloginpage.Controllers
{
    [Route("api/Login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DBContextLayer dBContextLayer;

        public LoginController( DBContextLayer _dBContextLayer)
        {
            dBContextLayer = _dBContextLayer;
        }


        [HttpPost]
        public IActionResult Registration([FromBody] AddUsersdto addUsersdto)
        {
            var registration = new LoginDetails
            {
                Name = addUsersdto.Name,
                EmailId = addUsersdto.EmailId,
                Password = addUsersdto.Password,
                IsActive = addUsersdto.IsActive
            };

            dBContextLayer.M_User.Add(registration);
            dBContextLayer.SaveChanges();

            return Ok(registration);
        }   
    }
}
