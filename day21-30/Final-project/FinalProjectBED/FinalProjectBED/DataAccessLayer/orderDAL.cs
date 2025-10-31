using FinalProjectBED.Models;
using Microsoft.Data.SqlClient;

namespace FinalProjectBED.DataAccessLayer
{
    public class orderDAL
    {
        private readonly string connectionString;
        public orderDAL(IConfiguration config)
        {
            connectionString = config.GetConnectionString("DefaultConnection");
        }

        public List<orderDTO> getOrderDTOs()
        {
            try
            {
                var orderDTOList = new List<orderDTO>();
                using var con = new SqlConnection(connectionString);
                var sqlcmd = new SqlCommand("select * from orderData", con);
                con.Open();
                var read = sqlcmd.ExecuteReader();
                while (read.Read())
                {
                    orderDTOList.Add(new orderDTO
                    {
                        OrderId = (Int32)read["orderID"],
                        CustomerName = read["customerName"].ToString(),
                        TrackingId = read["trackingId"].ToString(),
                        OrderDate = read["orderDate"].ToString(),
                        Quantity = (Int32)read["quantity"],
                        Address = read["address"].ToString(),
                        TotalPrice = (Int32)read["totalPrice"],
                        Status = read["status"].ToString(),
                    });
                }
                return orderDTOList;
            }
            catch(Exception ex)
            {
                Console.WriteLine("List of orderdata : "+ex.Message);
                throw;
            }
        }

        public orderDTO GetOrderDTObyId(int orderId)
        {
            try
            {
                var orderDTO = new orderDTO();
                using var con = new SqlConnection(connectionString);
                var sqlcmd = new SqlCommand("select * from orderData where orderId=@id", con);
                sqlcmd.Parameters.AddWithValue("@id", orderId);
                con.Open();
                var read = sqlcmd.ExecuteReader();
                if (read.Read())
                {
                    orderDTO.OrderId = (Int32)read["orderID"];
                    orderDTO.CustomerName = read["customerName"].ToString();
                    orderDTO.TrackingId = read["trackingId"].ToString();
                    orderDTO.OrderDate = read["orderDate"].ToString();
                    orderDTO.Quantity = (Int32)read["quantity"];
                    orderDTO.Address = read["address"].ToString();
                    orderDTO.TotalPrice = (Int32)read["totalPrice"];
                    orderDTO.Status = read["status"].ToString();
                }
                return orderDTO;
            }catch(Exception ex)
            {
                Console.WriteLine("get oder by id " + ex.Message);
                throw;
            }
        }

        public string InsertOrder(orderDTO order)
        {
            try
            {
                using var con = new SqlConnection(connectionString);
                var sqlcmd = new SqlCommand("insert into orderData(orderId,customerName,trackingId,orderDate,quantity,address,totalPrice,status) " +
                    "values (@OrderId,@CustomerName,@TrackingId,@OrderDate,@Quantity,@Address,@TotalPrice,@Status)",con);
                sqlcmd.Parameters.AddWithValue("@OrderId", order.OrderId);
                sqlcmd.Parameters.AddWithValue("@CustomerName", order.CustomerName);
                sqlcmd.Parameters.AddWithValue("@TrackingId", order.TrackingId);
                sqlcmd.Parameters.AddWithValue("@OrderDate", order.OrderDate);
                sqlcmd.Parameters.AddWithValue("@Quantity", order.Quantity);
                sqlcmd.Parameters.AddWithValue("@Address", order.Address);
                sqlcmd.Parameters.AddWithValue("@TotalPrice", order.TotalPrice);
                sqlcmd.Parameters.AddWithValue("@Status", order.Status);
                con.Open();
                sqlcmd.ExecuteNonQuery();
                return "iserted successfully";
            }
            catch(Exception ex)
            {
                Console.WriteLine("error in insertion " + ex.Message);
                throw;
            }
        }
        public string updateOrderStatus(orderDTO order)
        {
            try
            {
                using var con = new SqlConnection(connectionString);
                var sqlcmd = new SqlCommand("update orderData set customerName=@CustomerName,trackingId=@TrackingId,orderDate=@OrderDate,quantity=@Quantity,address=@Address,totalPrice=@TotalPrice,status=@Status where orderId=@OrderId", con);
                sqlcmd.Parameters.AddWithValue("@OrderId", order.OrderId);
                sqlcmd.Parameters.AddWithValue("@CustomerName", order.CustomerName);
                sqlcmd.Parameters.AddWithValue("@TrackingId", order.TrackingId);
                sqlcmd.Parameters.AddWithValue("@OrderDate", order.OrderDate);
                sqlcmd.Parameters.AddWithValue("@Quantity", order.Quantity);
                sqlcmd.Parameters.AddWithValue("@Address", order.Address);
                sqlcmd.Parameters.AddWithValue("@TotalPrice", order.TotalPrice);
                sqlcmd.Parameters.AddWithValue("@Status", order.Status);
                con.Open();
                sqlcmd.ExecuteNonQuery();
                return "updated successfully";
            }
            catch (Exception ex)
            {
                Console.WriteLine("error in updation " + ex.Message);
                throw;
            }
        }
        public string deleteOrder(int order)
        {
            try
            {
                using var con = new SqlConnection(connectionString);
                var sqlcmd = new SqlCommand("delete from orderData where orderId=@OrderId", con);
                sqlcmd.Parameters.AddWithValue("@OrderId", order);
                con.Open();
                sqlcmd.ExecuteNonQuery();
                return "deleted successfully";
            }
            catch (Exception ex)
            {
                Console.WriteLine("deletion failed " + ex.Message);
                throw;
            }
        }
    }
}
