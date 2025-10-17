using System;

public class Programs
{
    static void Main(string[] args)
    {
        Console.WriteLine("Enter inputs for a & b :");
        Console.WriteLine("a:");
        int a = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("b:");
        int b = Convert.ToInt32(Console.ReadLine());

        try
        {
            int c = a / b;
            Console.WriteLine("c is =", c);
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        finally 
        {
            Console.WriteLine("finnaly");
        }
    }
}
