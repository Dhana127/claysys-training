using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ConsoleEcomerce
{
    public class Product
    {
        int id;
        string name;
        int price;
        int quantity;

        public Product(int id, string name, int price, int quantity)
        {
            this.id = id;
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
        public int getId()
        {
            return id;
        }
        public void setId(int id)
        {
            this.id = id;
        }
        public string getName()
        {
            return name;
        }
        public void setName(string name)
        {
            this.name = name;
        }
        public int getPrice()
        {
            return price;
        }
        public void setPrice(int price)
        {
            this.price = price;
        }
        public int getQuantity()
        {
            return quantity;
        }
        public void setQuantity(int quantity)
        {
            this.quantity = quantity;
        }

        public void DisplayProduct()
        {
            Console.WriteLine($"ID: {id}, Name: {name}, Price: {price}, Quantity: {quantity}");
        }

    }
}
