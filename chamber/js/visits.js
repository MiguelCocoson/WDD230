// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
visitsDisplay.textContent = numVisits;

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);


const frequency = document.querySelector(".daily");

let frequencyd = Number(window.localStorage.getItem("frequency"));
frequency.textContent = Math.round(numVisits / frequencyd);


let lastvisit = window.localStorage.getItem("lastvisit");

date = new Date();
day = date.getDate();
month = date.getMonth();
year = date.getFullYear();

let dates = day + '/' + month + '/' + year;

if (dates != lastvisit) {
    lastvisit = dates;
    frequencyd++;
    localStorage.setItem('lastvisit', lastvisit)
    localStorage.setItem('frequency', frequencyd)
}