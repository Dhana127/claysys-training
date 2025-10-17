
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
public class Program
{
    static async Task Main(string[] args)
    {
        Console.WriteLine("enter city names:");
        string input = Console.ReadLine();
        string[] cities = input.Split(',');

        List<Task> tasks = new List<Task>();

        foreach(string city in cities) { 

        string data = await FetchDataAsync(city);
        Console.WriteLine(data);
        }
    }
    public static async Task<string> FetchDataAsync(string city)
    {
        using(HttpClient client = new HttpClient())
        {
            try
            {
                string apikey = "6cd2769e8f3d2fb77bf2fdf568bfe9d3";
              
                string url = $"https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={apikey}&units=metric";
                HttpResponseMessage response = await client.GetAsync(url);

                string json = await response.Content.ReadAsStringAsync();
                JObject data = JObject.Parse(json);
                string condition = data["list"][0]["weather"][0]["description"].ToString();
                double temp = data["list"][0]["main"]["temp"].ToObject<double>();
                string cityapi = data["city"]["name"].ToString();
                string str = $"City is {cityapi} Temperature is {temp} Condition is {condition}";
                return str;
            }
            catch(HttpRequestException htpexp)
            {
                Console.WriteLine($"HTTp : ,{htpexp.Message}");
            }
            catch(Exception e)
            {
                Console.WriteLine($"GG : ,{e.Message}");
            }
            return null;
        }
    }
}