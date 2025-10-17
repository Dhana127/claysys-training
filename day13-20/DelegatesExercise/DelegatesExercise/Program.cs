using System;

public class Program 
{
    public delegate int Result(int x, int y);

    public static int add(int x, int y) { return x + y; }
    public static int sub(int x, int y) { return x - y; }
    public static int mul(int x, int y) { return x * y; }
    static public int div(int x, int y) { return x / y; }
    static void Main(string[] args)
    {
        Result result = add;
        int ans = result(1, 2);
        Console.WriteLine($"Addition: {ans}");

        result = sub;
        ans = result(3, 4);
        Console.WriteLine($"Subraction: {ans}");

        result = mul;
        ans = result(9, 3);
        Console.WriteLine($"Multiply:  {ans}");

        result = div;
        ans = result(1222, 2);
        Console.WriteLine($"Division: {ans}");
    }

}