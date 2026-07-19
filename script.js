const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteElement.textContent = quote.text;
  authorElement.textContent = `- ${quote.author}`;
}

// Show a quote when the app loads
showRandomQuote();

// Show a new quote when button is clicked
button.addEventListener("click", showRandomQuote);
