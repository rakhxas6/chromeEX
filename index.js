// onclick function enabling method
// function saveLead(){
//     console.log("Button clicked!!")
// }

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// // push the value "www.awesomelead.com" to the myArray
// // when the input button is clicked

// inputBtn.addEventListener("click", function() {
// // push the value from the inputEl into the myLeads array
// // instead of the hard-coded "www.awesomelead.com" value
// // google -> "get the value from input field js"
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   console.log(myLeads);
// });

// // log out the items in the leads array using a for loop
// for( let i = 0; i < myLeads.length; i++){
//  console.log(myLeads[i])
// }

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// // grab the ul and store it in const variable ulEL
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   console.log(myLeads);
// });

// // render the leads in the ul using ulEl.textContent
// for( let i = 0; i < myLeads.length; i++){
// //  console.log(myLeads[i])
//   ulEl.textContent += myLeads[i] + " "
// }

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   console.log(myLeads);
// });

// // use of innerHTML
// for( let i = 0; i < myLeads.length; i++){
//   ulEl.innerHTML += "<li>" + myLeads[i] + " </li>"
// }

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   console.log(myLeads);
// });

// // lets try a different method

// for( let i = 0; i < myLeads.length; i++){
// // ulEl.innerHTML += "<li>" + myLeads[i] + " </li>"
// // create element
// // set text content
// // append to ul
// document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
// }

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   console.log(myLeads);
// });

// //1. create avariable listItems to hold all the HTML for the list items
// // assign it to an empty string to begin with
// let listItems = "";
// for (let i = 0; i < myLeads.length; i++) {
//   //2. add the item to the listItems variable instead of the ulEl.innerhtml
  
//   listItems += "<li>" + myLeads[i] + " </li>";
// }
// // 3. render the listItems inside the ul using ulEl.innerHTML
// ulEl.innerHTML = listItems

// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
  
// renderLeads()
//   // 2. Call the renderLeads() function
// });

// // 1. Wrap the code below in a renderLeads() function
// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += "<li>" + myLeads[i] + " </li>";
//   }
//   ulEl.innerHTML = listItems
// }


// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   // clear the input fields
//    inputEl.value = ""
//   renderLeads()
  
// });


// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     // wrap the lead in an anchor tag (<a>) inside the <li> 
//     //can you make the link open in a new tab?
//     listItems += "<li> <a target='_blank' href='" + myLeads[i]  + "'>" + myLeads[i] + "</a> </li>";
//     console.log(listItems)
//   }
//   ulEl.innerHTML = listItems
// }



// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//    inputEl.value = ""
//   renderLeads()
// });

// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     // listItems += "<li> <a target='_blank' href='" +
//     //  myLeads[i]  + "'>" + myLeads[i] + "</a> </li>";

//     // example of template string that uses backtick..
//  listItems += `
//       <li>
//           <a target='_blank' href='${myLeads[i]}'> 
//               ${myLeads[i]}
//           </a> 
//        </li>
//        `
//   }
//   ulEl.innerHTML = listItems
// }

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLeads", "www.example.com")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
   inputEl.value = ""
  renderLeads()
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
 listItems += `
      <li>
          <a target='_blank' href='${myLeads[i]}'> 
              ${myLeads[i]}
          </a> 
       </li>
       `
  }
  ulEl.innerHTML = listItems
}