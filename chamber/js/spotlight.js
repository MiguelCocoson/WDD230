const URL = '../chamber/json/directory.json';
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
		let h1 = document.createElement('h1');
		let p = document.createElement('p');
		let img = document.createElement('img');
	
		h1.innerHTML = `${company.name}`;
		p.innerHTML = `Address: ${company.address}<br>Phone Number: ${company.phone}<br>Website: ${company.website}`;
		img.setAttribute('src', company.image);
		img.setAttribute('alt', `Picture of ${company.name} company`);
		img.setAttribute('loading', 'lazy');

		card.append(h1);
		card.appendChild(p);
		card.append(img);

        var len = 0

		if (company.membership == 'gold' && len < 4) {
			spotlights.append(card)
            len += 1
		}
	});
}

getCompanies();