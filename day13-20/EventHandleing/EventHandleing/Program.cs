using EventHandleing;
using System;

public class Program
{
    static void Main(string[] args)
    {
        Clock clock = new Clock();
        Display display = new Display();

        display.Subscribe(clock);
        clock.startClock();
        Console.WriteLine("press enter to exit");
        Console.ReadLine();
        clock.StopClock();

    }
}