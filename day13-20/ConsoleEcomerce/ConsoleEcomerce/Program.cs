using ConsoleEcomerce;
using System;

class Program
{
    static void Main(string[] args)
    {
        Product[] productsArr = new Product[5];
        for(int i = 0; i < productsArr.Length; i++)
        {
            Console.WriteLine("Enter Product Details:");
            Console.WriteLine("Enter product id :");
            int id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter product Name :");
            string name = Console.ReadLine();
            Console.WriteLine("Enter product price :");
            int price = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter product quantity :");
            int quantity = Convert.ToInt32(Console.ReadLine());
            Product product = new Product(id, name, price, quantity);
            productsArr[i] = product;
        }

        ShoppingCart shoppingCart = new ShoppingCart(productsArr);

        while (true)
        {

            try
            {
                Console.WriteLine("\n========= SHOPPING MENU =========");
                Console.WriteLine("1. View Products");
                Console.WriteLine("2. Add Product to Cart");
                Console.WriteLine("3. View Cart");
                Console.WriteLine("4. Remove Product from Cart");
                Console.WriteLine("5. Checkout");
                Console.WriteLine("6. Exit");
                Console.Write("Enter your choice: ");

                int choice = Convert.ToInt32(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        Console.WriteLine("Available Products");
                        foreach (var p in productsArr)
                            p.DisplayProduct();
                        break;

                    case 2:

                        shoppingCart.addProductCart();
                        break;

                    case 3:
                        shoppingCart.displayCart();
                        break;

                    case 4:
                        shoppingCart.removeProductCart();
                        break;

                    case 5:
                        shoppingCart.calculateTotal();
                        return;

                    case 6:
                        Console.WriteLine("Exiting... Thank you!");
                        return;

                    default:
                        Console.WriteLine("Invalid choice! Please enter between 1-6.");
                        break;
                }
            }
            catch (FormatException)
            {
                Console.WriteLine("Invalid input! Please enter a number.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
            
    } 
    
}