/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('"International Space Station API "')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}


// TODO Extract the latitude value, and log it to the console. 
// I Extract timestamp,Latitude and longitude from the object iss_location and the property iss_position.

let timestamp = iss_location["timestamp"]
console.log(`1: Timestamp: ${timestamp}`)

let latitude = iss_location.iss_position.latitude
console.log(`2: latitude: ${latitude}`)

// TODO Extract the longitude value, and log it to the console.

let longitude = iss_location.iss_position.longitude
console.log(`3: longitude: ${longitude}`)



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194

    // "CHF": 1.1787,
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.

rates["CHF"] = 1.1787

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)

let euroToAud = 100 * rates.AUD // Now in 2022 the exchange rate is  $ 156.69 AUD 
console.log(`4 : The exchange and equivalent in AUD  : ${euroToAud}`)

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

let max_rate = 0    // create variables to hold the max rate and its currency while looping through object
let max_rate_currency = ""
for (currency in rates) {  // for each currency, check if its exchange rate is higher than what has been stored
    if (rates[currency] > max_rate)
        {max_rate = rates[currency]
        max_rate_currency = currency}
}
console.log(`5: The highest exchange rate is ${max_rate_currency} at ${max_rate} for 1 Euro.`)




/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

console.log('"Cat Owners and their cats"')

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name

cats_and_owners.forEach(function(catObject) {
  if (catObject.name === "Gary Oldman")
      console.log(`1: Gary Oldman's cat name: ${catObject.cat}`)
})

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
// Javascript Array push() / W3 schools : shorturl.at/bFT57   ( the link is short URL because the original is too long)

cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})


console.log(`-----Here is the loop for each Cat Owner ---------`) //  A title to show the loop 


// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
// The forEach() method calls a function (a callback function) once for each array element. "W3 schools"

cats_and_owners.forEach(function(cat_and_owner) {

  // Show the message as required in TODO 
  console.log(` ${cat_and_owner.name}'s cat is called : ${cat_and_owner.cat}`)
})



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */


let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}

console.log(`------ Nobel Prize winners and categories -------`) // A tittle for this API 

// TODO print the full name of the Literature Nobel laureate.
let nobelWinners = nobel_prize_winners_2017["prizes"] // From the JSON object API 

nobelWinners.forEach(function(prize) {
    if (prize["category"] === "literature") {
        let literatureArray = prize["laureates"]
        literatureArray.forEach(function(prizeWinner) {
            console.log(`Literature Nobel laurete: ${prizeWinner.firstname} ${prizeWinner.surname}`) // Full name and category Winner.
        })
    }
})


// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
console.log('IDs of the Physics laureates:') // A brief description 

nobel_prize_winners_2017.prizes.forEach(function(prize) {
  if (prize.category == 'physics') {                          // Makes the id's on a ordered list as the API Data from above.
      prize.laureates.forEach(function(laureate) {
          console.log(laureate.id)   // shows the id's 
      })
  }
})

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
console.log('The prize categories are:') // A title

nobel_prize_winners_2017.prizes.forEach(function(prize) {  // All of the price categories from nobel_prize_winners_2017
    console.log(`•  ${prize.category}`) // Output for each category using a bullet point. 
})


// TODO write code to print the total number of prize categories

let prizeCategories = []
nobel_prize_winners_2017.prizes.forEach(function(prize) {        // from the novel_prize_winners_2017
    prizeCategories.push(prize.category)
})
console.log(`Total number of ${prizeCategories.length} prize categories`) //  Length ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

// TODO write code to count the total number of laureates from 2017. 

let numberOfLaureates = 0
nobel_prize_winners_2017.prizes.forEach(function(prize) {
    prize.laureates.forEach(function(laureate) {
        numberOfLaureates++
    })
})
console.log(`Total number of  ${numberOfLaureates} Laureates from 2017`)


