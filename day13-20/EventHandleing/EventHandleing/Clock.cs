using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;

namespace EventHandleing
{
    internal class Clock
    {
        public event EventHandler OnTick;

        private System.Timers.Timer timer;

        public void startClock()
        {
            timer = new System.Timers.Timer(1000);
            timer.Elapsed += TimerElapsed;
            timer.AutoReset = true;
            timer.Enabled = true;
            Console.WriteLine("clock started");
        }
        private void TimerElapsed(object sender, ElapsedEventArgs e)
        {
            if (OnTick != null)
            {
                OnTick(this, EventArgs.Empty);
            }
        }
        public void StopClock()
        {
            timer.Stop();
            timer.Dispose();
            Console.WriteLine("clock stopped");
        }
    }
}
