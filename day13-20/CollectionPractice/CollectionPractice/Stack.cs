using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollectionPractice
{
    internal class Stacks<T>
    {
        private List<T> elements = new List<T>();

        public void push(T element)
        {
            elements.Add(element);
        }
        public T pop()
        {
            if (elements == null || elements.Count == 0)
            {
                throw new InvalidOperationException("Cannot pop from an empty list.");
            }
            T oneEle = elements[elements.Count - 1];
            elements.Remove(oneEle);
            return oneEle;
        }
        public T peek()
        {
            return elements[elements.Count - 1];
        }
    }
}
