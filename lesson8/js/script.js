let date = new Date();

const datefield = document.querySelector("#date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	date
);

datefield.innerHTML = `<em>${fulldate}</em>`;

document.querySelector("#date").textContent = `${document.lastModified}`;