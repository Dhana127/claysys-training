using System;
using System.Globalization;
using CollectionPractice;
public class Program
{
    static void Main(string[] args)
    {
        Stacks<int> num = new Stacks<int>();
        num.push(11);
        num.push(12);
        num.push(13);
        num.push(14);
        num.push(15);
        Console.WriteLine(num.peek());
        Console.WriteLine(num.pop());
        Console.WriteLine(num.peek());
        
    }
}