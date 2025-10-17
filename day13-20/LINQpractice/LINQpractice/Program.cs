using System;

public class Program
{
    static void Main(string[] args)
    {
        int[] number = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        //var evennum = from n in number where n % 2 == 0 select n;
        //Console.WriteLine(evennum);

        var evennum = number.Where(a => a % 2 == 0).ToArray();

        foreach (var n in evennum)
        {
            Console.WriteLine(n);
        }

        List<Person> people = new List<Person>
        {
            new Person{name="Dhana", age=22},
            new Person{name="surya",age=17}
        };
        var adult = people.Where(p => p.age >= 18);
        foreach(var person in adult)
        {
            Console.WriteLine($"name of the person {person.name} and age is {person.age}");
        }
    }

}
class Person
{
    public string name;
    public int age;
}