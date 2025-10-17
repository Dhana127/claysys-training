using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ConsoleEcomerce
{
    public class ShoppingCart
    {

        Product[] product;
        Product[] productSC;
        int i = 0;
        
        public ShoppingCart(Product[] productArr)
        {
            this.product = productArr;
            productSC = new Product[productArr.Length];
        }
        
        public void addProductCart()
        {
            Console.WriteLine("Add product to cart:");
            Console.WriteLine("enter id to add the product : ");
            int idToAddPro = Convert.ToInt32(Console.ReadLine());
            productSC[i] = product[idToAddPro];
            i++;
        }
        public void removeProductCart()
        {
            Console.WriteLine("Remove product from cart:");
            Console.WriteLine("enter id to remove product form cart :");
            int idToRemove = Convert.ToInt32(Console.ReadLine());
            if (productSC[idToRemove + 1] == null)
            {
                productSC[idToRemove] = null; 
            }
            else 
            {
                productSC[idToRemove] = productSC[idToRemove + 1];
             } 
            i--;
        }
        public void displayCart()
        {
            Console.WriteLine("Items in Cart:");
            for(int i = 0; i < productSC.Length; i++)
            {
                if (productSC[i] != null) {
                    Console.WriteLine($"ID: {productSC[i].getId()}, Name: {productSC[i].getName()}, Price: {productSC[i].getPrice()}, Quantity: {productSC[i].getQuantity()}");
                }
            }
        }
        public void calculateTotal()
        {
            int total = 0;
            Console.WriteLine("Total Price:");
            for (int i = 0; i < productSC.Length; i++)
            {
                if (productSC[i] != null) { 
                total += productSC[i].getPrice() * productSC[i].getQuantity();

                }
            }

            Console.WriteLine(total);
        }
    }
}
