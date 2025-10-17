using System;

namespace helloWorldApp
{
    class Program {
        static void Main(string[] args) {
            Random random = new Random();
            int target = random.Next(1, 101);
            Console.WriteLine(target);
            Console.WriteLine("choose num between 1 to 100");
            int input = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(input);
            bool check = true;
            while (check)
            {
                if (target != input && target < input)
                {
                    Console.WriteLine("Too high");
                    Console.WriteLine("choose agian num between 1 to 100");
                    input = Convert.ToInt32(Console.ReadLine());

                }
                else if (target != input && target > input)
                {
                    Console.WriteLine("Too low");
                    Console.WriteLine("choose agian num between 1 to 100");
                    input = Convert.ToInt32(Console.ReadLine());
                }
                else if (target == input)
                {
                    Console.WriteLine("you gessed correctly");
                    check = false;
                }
            }
        }
    }
}