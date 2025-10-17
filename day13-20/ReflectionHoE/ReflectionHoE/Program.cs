using System;
using System.Reflection;
using System.Text;

public class ObjectSerializer
{
    public static string SerializeObject(object obj)
    {
        if (obj == null)
            return "Object is null";

        Type type = obj.GetType();
        PropertyInfo[] properties = type.GetProperties();

        StringBuilder sb = new StringBuilder();
        sb.AppendLine($"Object Type: {type.Name}");

        foreach (PropertyInfo prop in properties)
        {
            object value = prop.GetValue(obj) ?? "null";
            sb.AppendLine($"{prop.Name}: {value}");
        }

        return sb.ToString();
    }
}


public class Student
{
    public int RollNo { get; set; }
    public string Name { get; set; }
    public double Marks { get; set; }
}

public class Product
{
    public string ProductName { get; set; }
    public double Price { get; set; }
    public bool InStock { get; set; }
}

public class Program
{
    public static void Main()
    {
        
        Student s = new Student { RollNo = 1, Name = "Dhanaprakash", Marks = 92.5 };
        Product p = new Product { ProductName = "Laptop", Price = 75000, InStock = true };

        Console.WriteLine(ObjectSerializer.SerializeObject(s));
        Console.WriteLine(ObjectSerializer.SerializeObject(p));
    }
}
