using System;
using System.Threading.Tasks;

namespace Example
{
  public class Greetings
  {
    public async Task<object> Greet(object input)
    {
      string message = (string)input;
      return String.Format("On {0}, you said {1}",
        System.DateTime.Now,
        message);
    }
  }
}