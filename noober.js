// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  
// Define passenger first name 
let passengerFirstName = ride.passengerDetails.first

// Define passenger last name 
let passengerLastName = ride.passengerDetails.last

// Display passenger full name
console.log(`Your Next Noober Passenger is ${passengerFirstName} ${passengerLastName}!`)

// Define passenger phone number
let passengerNumber = ride.passengerDetails.phoneNumber 

// Display passenger phone number
console.log(`Their phone number is ${passengerNumber}.`)

// Define pickup address
let passengerPickupAddress = ride.pickupLocation.address 

// Define pickup city 
let passengerPickupCity = ride.pickupLocation.city 

// Define pickup state
let passengerPickupState = ride.pickupLocation.state 

// Define pickup zip 
let passengerPickupZip = ride.pickupLocation.zip 

// Display passenger phone number
console.log(`Their pickup location is ${passengerPickupAddress} ${passengerPickupCity} ${passengerPickupState} ${passengerPickupZip}.`)


// Define dropoff address
let passengerDropoffAddress = ride.dropoffLocation.address

// Define dropoff city 
let passengerDropoffCity = ride.dropoffLocation.city 

// Define dropoff state 
let passengerDropoffState = ride.dropoffLocation.state 

// Define dropoff zip 
let passengerDropoffZip = ride.dropoffLocation.zip 

// Display passenger dropoff location 
console.log(`Their dropoff location will be ${passengerDropoffAddress} ${passengerDropoffCity} ${passengerDropoffState} ${passengerDropoffZip}.`)


// Define purple service 
let passengerPurpleRequested = ride.purpleRequested

// // Display Purple Service, if requested
// if (riderPurpleRequested == true) {
//     console.log(`Noober Purple`)
// }

// Define car size request 
let passengerCarSize = ride.numberOfPassengers

// Display number of passengers
console.log(`There will be ${passengerCarSize} passenger(s) in this ride.`) 

// conditional logic for car selection 
// If XL is needed and Purple is not requested, make the service XL   
if (passengerCarSize > 3 && passengerPurpleRequested == false) {
  console.log(`Level of Service = Noober XL Service`)
} 
// If XL is needed and Purple is also requested, Purple overrides XL  
else if (passengerCarSize > 3 && passengerPurpleRequested == true) {
  console.log (`Level of Service = Noober Purple`)
} 
// If XL is not needed and Purple is requested, make the service Noober Purple  
else if (passengerCarSize <= 3 && passengerPurpleRequested == true) {
  console.log(`Level of Service = Noober Purple`)
} 
// If XL is not needed and Purple is not requested, make the service Noober X
else {
  console.log(`Level of Service = Noober X`)
}





  // 🔥 YOUR CODE ENDS HERE 🔥
})
