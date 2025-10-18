/* 
ThatStella7922 Landing Website "quotes" Handler
No I didn't have a better name for it

v2025.0502.0
*/

// Globals
const currentFullDate = new Date();
var currentMonth = currentFullDate.getMonth() + 1;
var currentDay = currentFullDate.getDate(); 
// End Globals

// Quotes
const quotes = [
    "Another day, another dream? Either way, make the most of it", 
    "If you're going through hell, keep going", 
    "Rules are not necessarily sacred, principles are", 
    "In time of difficulties, we must not lose sight of our achievements",
    "If one says your dreams are insane—take that as a compliment",
    "If the sky is the limit, go beyond the atmosphere"
]

function getRandomQuote() {
  var quote = quotes[~~(Math.random() * quotes.length)];
  return quote;
}

function setQuotesText() {
  switch (currentMonth) {
    // Switch statement for months, each month case can have a switch statement for days too


    case 05:
      switch (currentDay) {
        case 08:
          var quoteText = "Victory in Europe Day";
          break;
        default:
          var quoteText = getRandomQuote();
          break;
      }
      break;

      case 10:
        switch (currentDay) {
          case 24:
            var quoteText = "yay me birthday";
            break;
          default:
            var quoteText = getRandomQuote();
            break;
        }
        break;

    default:
      var quoteText = getRandomQuote();
      break;
  }

    //console.log("setQuotesText() returned the following string:\n" + randomText);
    document.getElementById('quotep').innerHTML = quoteText;
}

// SHHHH SECRET
function manualSetQuotesText() {
  manualQuote = prompt("You found the secret!\nEnter the desired quote text:", document.getElementById('quotep').innerHTML);
  if (manualQuote != null) {
    document.getElementById('quotep').innerHTML = manualQuote;
  }
}

// End Quotes