var factList = [
  "Your fact is: Over 75 million children living in crisis-affected areas have had their education disrupted, with conflict being a major obstacle to accessing education.",
  "Your fact is: Access to education doesn't solely imply attendance; the quality of education matters significantly. Millions of children who attend school still lack basic reading and math skills.",
  "Your fact is: For every year of schooling, an individual's earnings increase by an average of 10%. Education also correlates with reduced poverty rates and improved economic growth for countries.",
  "Your fact is: Around the world, girls are more likely to face barriers to education, with 132 million girls out of school globally.",
  "Your fact is: The COVID-19 pandemic has exacerbated the digital divide, with millions of children lacking access to remote learning due to limited or no access to the internet or technology.",
  "Your fact is: Education is linked to better health outcomes, with educated individuals being more likely to adopt healthier lifestyles and access healthcare.",
  "Your fact is: Poverty remains as one of the most significant barriers to education. Children from the poorest households are almost five times more likely to be out of school than those from the wealthiest.",
]

var fact = document.getElementById ("fact");
var factBtn = document.getElementById ("factBtn");
var count = 0;

if(factBtn) {
    factBtn.addEventListener("click", displayFact);
}


function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}