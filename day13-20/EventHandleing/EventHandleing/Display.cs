using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventHandleing
{
    internal class Display
    {
        public void Subscribe(Clock clock) 
        {
            clock.OnTick += HandleClockTick;
            Console.WriteLine("Display subcribed to clock event.");
        }
        private void HandleClockTick(object sender, EventArgs e)
        {
            Console.WriteLine($"current time : {DateTime.Now.ToString("HH:mm:ss")}");
        }
    }
}
