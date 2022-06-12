// Get year
let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

//Submition date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
var hh = today.getHours();
var mm = today.getMinutes();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
today = yyyy+"/"+mm+"/"+dd+" "+hh+":"+mm;

document.getElementById("submited").innerHTML = today;

const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	date
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// Get last modification
document.querySelector(
	"#lastmodified"
).textContent = `${document.lastModified}`;

// Get hamburger menu
function toggleMenu() {
	document.getElementById('primaryNav').classList.toggle('open');
	document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

// Get week day
let day = date.getDay();
let events = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'

if (day == 1 || day == 2) {
	document.querySelector('#banner').innerHTML = events;
}

// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
visitsDisplay.textContent = numVisits;

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);