using System;


abstract class Shapes
{
    public abstract double getArea();
    public abstract double getPerimeter();
}

class Rectangle : Shapes
{
    private double length { get; set; }
    private double width { get; set; }

    public Rectangle(double length,double width)
    {
        this.length = length;
        this.width = width;
    }
    public override double getArea()
    {
        return length * width;
        
    }

    public override double getPerimeter()
    {
        return 2 * (length + width);
    }
}

class Triangle : Shapes
{
    private double side1 { get; set; }
    private double side2 { get; set; }
    private double side3 { get; set; }

    public Triangle( double side1,double side2,double side3)
    {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    public override double getArea()
    {
        double s = (side1 + side2 + side3) / 2;
        return Math.Sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }

    public override double getPerimeter()
    {
        return side1 + side2 + side3;
    }
}

class Circle : Shapes
{
    private double radius { get; set; }

    public Circle(double radius) { this.radius = radius; }
    public override double getArea()
    {
        return 3.14 * radius * radius;
    }

    public override double getPerimeter()
    {
        return 2 * 3.14 * radius;
    }
}
public class Program
{
    static void Main(string[] args)
    {
        List<Shapes> shapes = new List<Shapes>()
        {
            new Rectangle(5,15),
            new Triangle(20,30,18),
            new Circle(7)
        };
        double totalArea = 0;
        double totalPerimeter = 0;

        foreach (var item in shapes)
        {
            totalArea += item.getArea();
            totalPerimeter += item.getPerimeter();
        }

        Console.WriteLine($"Total Area of Shapes : {totalArea}");
        Console.WriteLine($"Total Perimeter of Shapes :{totalPerimeter}");
    }
}