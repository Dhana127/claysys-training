using System;


interface ILogger
{
    void LogInfo(string message);
    void LogWarning(string message);
    void LogError(string message);
}

class ConsoleLogger : ILogger
{
    public void LogError(string message)
    {
        Console.WriteLine($"[ Error ] {message}");
    }

    public void LogInfo(string message)
    {
        Console.WriteLine($"[ Info ] {message}");
    }

    public void LogWarning(string message)
    {
        Console.WriteLine($"[ Warning ] {message}");
    }
}

class FileLogger : ILogger
{
    private readonly string filename;

    public FileLogger(string file)
    {
        this.filename = file;
    }
    public void LogError(string message)
    {
        File.AppendAllText(filename, $"[ Error ] {message}");
    }

    public void LogInfo(string message)
    {
        File.AppendAllText(filename, $"[ Info ] {message}");
    }

    public void LogWarning(string message)
    {
        File.AppendAllText(filename, $"[ Warning ] {message}");
    }
}

class Application
{
    private readonly ILogger logger;

    public Application( ILogger logger)
    {
        this.logger = logger;
    }

    public void Run()
    {
        logger.LogInfo("hello");
        logger.LogWarning("signing off");
        logger.LogError("shoutdowm");
    }
}
public class Program
{
    static void Main(string[] args)
    {
        ILogger logger;

        Console.WriteLine("Choose file or console : ");
        string choice = Console.ReadLine().ToLower();
        if (choice == "file")
        {
            logger = new FileLogger("log.txt");
        }
        else
        {
            logger = new ConsoleLogger();
        }
        Application app = new Application(logger);
        app.Run();
    }
}