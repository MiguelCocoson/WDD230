const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
	let response = await fetch(URL);
	if (response.ok) {
		let data = await response.json();
		buildProphetsCards(data);
	} else {
		throw Error(response.statusText);
	}
}

function buildProphetsCards(data) {
	data.prophets.forEach(prophet => {
		let card = document.createElement('section');
		let h2 = document.createElement('h2');
		let p = document.createElement('p');
		let img = document.createElement('img');

		let fullName = `${prophet.name} ${prophet.lastname}`;
	
		h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname}</span>`;
		p.innerHTML = `Location of birth: <strong>${prophet.birthplace}</strong>`;
		img.setAttribute('src', prophet.imageurl);
		img.setAttribute('alt', `Picture of the President ${fullName}`);
		img.setAttribute('loading', 'lazy');

		card.append(h2);
		card.appendChild(p);
		card.append(img);

		cards.append(card);
	});
}

getProphets();
