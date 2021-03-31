/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Create list of quotes with source. Optional Citation & Year.

let quotes = [
	{
		quote: "If you want to live a happy life, tie it to a goal, not to people or things",
		source: "Albert Einstein",
	},
	{
		quote: "Stay away from negative people. They have a problem for every solution",
		source: "Albert Einstein",
	},
	{
		quote: "Success is the Ability to go from one failure to another with no loss of enthusiasm",
		source: "Winston Churchill",
	},
	{
		quote: "That which does not kill us makes us stronger",
		source: "Friedrich Nietzsche",
	},
	{
		quote: "Strive not to be a success, but rather to be of value",
		source: "Albert Einstein",
	},
	{
		quote: "It's a dog eat dog world, Sammy, and I'm wearing Milk-Bone underwear.",
		source: "Norm Peterson",
		citation: "Cheers - (TV Series)",
		year: 1986,
	},
];

// get a random quote from quotes
const numQuotes = quotes.length;
const getRandomQuote = () => {
	let randomNumber = Math.floor(Math.random() * numQuotes);
	let quote = quotes[randomNumber];
	return quote;
};

// display randomly selected quote
const printQuote = () => {
	let quote = getRandomQuote();
	let html = `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}   
  `;

	// Check to see if a quote has a citation. True => Show it
	if (quote.citation) {
		html += `<span class="citation">${quote.citation}</span>`;
	}
	// Check to see if a quote has a year. Tru => Show it
	if (quote.year) {
		html += `<span class="year">${quote.year}</span>`;
	}

	html += "</p>"; // Close html string

  // logic to randomize background color for each quote
  let body = document.body;
  let randomValue = () => Math.floor(Math.random() * 256);
  
  const randomRGB = value => {
    const color = `rgb(${value()}, ${value()}, ${value()})`;
    return color;
  }

  body.style = `background-color: ${randomRGB(randomValue)}`

	//Display dynamic html in "quote-box" id in index.html
	document.getElementById("quote-box").innerHTML = html;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);
