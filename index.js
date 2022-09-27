let myLeads = []
let oldLEads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads) 
    });
    //console.log(tabs)
})

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target = '_blank' href='${leads[i]}'> 
                ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML += listItems
}

deleteBtn.addEventListener("dblclick", function() {
    //console.log("Double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" // clear whatever is in the input
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    //console.log( localStorage.getItem("myLeads") )
})
/*
//.innerHTML Practice
const container = document.getElementById("container")

container.innerHTML = "<button onclick= 'buy()'> BUY! </button>"

function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>"
}

//OR
const (element name here) = document.create("element name tag here")
(element tag here).textContent = continue codes

*/

/*
//TEMPLATE STRINGS/LITERALS
const receipient = "James"
const sender = "Temi"

const email = `
    Hey ${receipient}! 
    How is it going?
    Cheers ${sender}
    `
 
console.log(email)


//TRUTHY AND FALSY

//Falsy Values
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalize emptiness
// NaN

//FUNCTION PARAMETERS
/*
const welcomeEl = document.getElementById("welcome-el")

function greetUser(name) {
    welcomeEl.textContent = "Welcome back, " + name + " 👋"    
}

console.log(greetUser("Temi"))

const welcomeEl = document.getElementById("welcome-el")

// Add the ability to choose the emoji as well!

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Howdy", "James", "🔥") 

//Parameters are inside the function 
function add(num1, num2) {
    return num1 + num2
}
//Arguments are outside the function
console.log(add(3, 4))


function getFirst(arr) {
    return arr[0]
}

let firstCard = getFirst([10, 5, 3])
console.log(firstCard)
*/