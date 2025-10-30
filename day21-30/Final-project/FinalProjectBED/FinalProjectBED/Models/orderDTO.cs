namespace FinalProjectBED.Models
{
    public class orderDTO
    {
        public int OrderId { get; set; }
        public string CustomerName { get; set; }
        public string TrackingId { get; set; }
        public string OrderDate { get; set; }
        public int Quantity { get; set; }
        public string Address { get; set; }
        public int TotalPrice { get; set; }
        public string Status { get; set; }
    }
}
