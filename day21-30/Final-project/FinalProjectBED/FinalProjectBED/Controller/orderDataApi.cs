using FinalProjectBED.DataAccessLayer;
using FinalProjectBED.Models;
using Microsoft.AspNetCore.Mvc;

namespace FinalProjectBED.Controller
{
    [ApiController]
    [Route("api/[Controller]")]
    public class orderDataApi : ControllerBase
    {
        private readonly orderDAL orderDal;
        public orderDataApi(IConfiguration config)
        {
            orderDal = new orderDAL(config);
        }

        [HttpGet]
        public IActionResult getAlldetails()
        {
            try
            {
                var allorders = orderDal.getOrderDTOs();
                if (allorders == null)
                {
                    return StatusCode(500, "Failed to retrive order data");
                }
                return Ok(allorders);
            }
            catch (Exception ex)
            {
                Console.WriteLine("get all orders " + ex.Message);
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet("{id}")]
        public IActionResult getOrderById([FromRoute] int id)
        {
            try
            {
                var order = orderDal.GetOrderDTObyId(id);
                if (order == null)
                {
                    return StatusCode(500, "not found");
                }
                return Ok(order);
            }
            catch(Exception ex)
            {
                Console.WriteLine("get by id " + ex.Message);
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPost("add")]
        public IActionResult addOderData([FromBody] orderDTO orders)
        {
            try
            {
                var adddata = orderDal.InsertOrder(orders);
                if(adddata == null)
                {
                    return StatusCode(500, "Insertion faild");
                }
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                Console.WriteLine(" insertion " + ex.Message);
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPut("update")]
        public IActionResult updateStatus([FromBody] orderDTO order)
        {
            try
            {
                var uporder = orderDal.updateOrderStatus(order);
                if (uporder == null)
                {
                    return StatusCode(500, "update failed");
                }
                return Ok(new {message="updeted successfully"});

            }
            catch(Exception ex)
            {
                Console.WriteLine("updation " + ex.Message);
                return StatusCode(500, ex.Message);
            }
        }
        [HttpDelete("delete/{orderId}")]
        public IActionResult deleteOrder([FromRoute] int orderId)
        {
            try
            {
                var delorder = orderDal.deleteOrder(orderId);
                if (delorder == null)
                {
                    return StatusCode(500, "deletion failed");
                }
                return StatusCode(204);
            }
            catch(Exception ex)
            {
                Console.WriteLine("deletion " + ex.Message);
                return StatusCode(500, ex.Message);
            }
        }
    }
}
