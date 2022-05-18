let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

const list = document.querySelector('.list');
const input = document.getElementById('favchap');
const button = document.getElementById('add');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = '❌';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});