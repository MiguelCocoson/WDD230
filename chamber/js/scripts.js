let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

document.querySelector(
	"#lastmodified"
).textContent = `${document.lastModified}`;

function toggleMenu() {
	document.getElementById('primaryNav').classList.toggle('open');
	document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;