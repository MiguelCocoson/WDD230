// Get year
let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

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
