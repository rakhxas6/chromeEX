
// //  let divBox = document.getElementById("box")

// //  divBox.addEventListener("click", function(){
// //     console.log("I want to open the box!")
// //  })

// // // Let vs Const

// // const playerName = "Per" //can't be reassigned
// // let credits = 45          //can be reassign.

// // credits -= 10


// // // further example
// // // If possible, use const. If not, use let.

// // // Which variables below should be changed from let to const?

// // // The customer wants to order some stuff. Here are the details:
// // const basePrice = 520
// // const discount = 120
// // let shippingCost = 12
// // let shippingTime = "5-12 days"

// // // Whops! Turns out the shipping will be a bit more complex
// // shippingCost = 15
// // shippingTime = "7-14 days"

// // // Calculating the full price
// // const fullPrice = basePrice - discount + shippingCost

// // // Finally, notifying the customer
// // console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)




// // use .innerHTML to render   a Buy! button inside the div container

// const container = document.getElementById("container")
// container.innerHTML = "<button>Buy!</button>"



// // template sting/literals

// const recipient = "James"

// // Create a new variable, sender, and set its value to your name

// const sender = "Sujan Kumar Kandel"

// // use your sender variable instead of "Per"
// // Break the email string into multiple lines

// const email = `
//         Hey ${recipient}!
//         How is it going? 
//         Cheers ${sender}
//  `

// // Refactor the email string to use template string
// // const email = "Hey" + recipient + "! How is it going? Cheers Per"
// // const email = `Hey ${recipient}! How is it going? Cheers Per`
// console.log(email)


let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
  
localStorage.setItem("myName", "Sujan Kumar Kandel")

// let name = localStorage.getItem("myName")
// console.log(name)

localStorage.clear()


// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings