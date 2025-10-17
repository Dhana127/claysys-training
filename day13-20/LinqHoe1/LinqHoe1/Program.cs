using System;

public class Program
{
    static void Main(string[] args)
    {
        List<Products> products = new List<Products>() 
        {
            new Products{Name="bat",Category="sports",Price=400},
            new Products{Name="ball",Category="sports",Price=100},
            new Products{Name="stumps",Category="sports",Price=250},
            new Products{Name="monitor",Category="electronics",Price=3500},
            new Products{Name="headphone",Category="electronics",Price=1200},
            new Products{Name="keyboard",Category="electronics",Price=800},
            new Products{Name="smartphones",Category="electronics",Price=150000}
        };
        var specific = products.Where(a => a.Category == "electronics").ToList();
        foreach (var item in specific)
        {
            Console.WriteLine(item.Name);
        }
        var avg = products.Average(a => a.Price);
        var avgQuries = (from p in products
                         where p.Category == "sports"
                         select p.Price).Average();
                       
        Console.WriteLine(avg.ToString());
        Console.WriteLine(avgQuries.ToString());

        var groupByCategory = from p in products
                              group p by p.Category into g
                              orderby g.Count() descending
                              select new { Category = g.Key, Count = g.Count() };
        foreach(var item in groupByCategory)
        {
            Console.WriteLine($"Category : {item.Category} Count : {item.Count}");
        }
    }
}

class Products
{
    public string Name;
    public string Category;
    public int Price;
}