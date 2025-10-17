using System;
using System.Collections;

public class Program
{
    static void Main(string[] args)
    {
        List<int> al = new List<int>();
        for(int i=0; i<=100; i++)
        {
            al.Add(i);
        }
        List<int> newList= al.Where(n=> n% 2 == 0).ToList();
        //Console.WriteLine(newList);
        foreach (var item in newList)
        {
            Console.WriteLine(item);
        }
    }
}