const URL = '../chamber/json/directory.json';
const cards = document.querySelector('.companies');
const spotlights = document.querySelector('#spotlight');

async function getCompanies() {
	let response = await fetch(URL);
	if (response.ok) {
		let data = await response.json();
		buildCompaniesCards(data);
	} else {
		throw Error(response.statusText);
	}
}

function buildCompaniesCards(data) {
    data.companies.forEach(company => {
		let card = document.createElement('section');
		let h2 = document.createElement('h2');
		let p = document.createElement('p');
		let img = document.createElement('img');
	
		h2.innerHTML = `${company.name}`;
		p.innerHTML = `Address: ${company.address}<br>Phone Number: ${company.phone}<br>Website: ${company.website}`;
		img.setAttribute('src', company.image);
		img.setAttribute('alt', `Picture of ${company.name} company`);
		img.setAttribute('loading', 'lazy');

		card.append(h2);
		card.appendChild(p);
		card.append(img);

		cards.append(card);

		if (company.membership == 'gold' && cards.length < 4) {
			spotlights.append(card)
		}
	});
}

getCompanies();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}