const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
form.addEventListener('submit',function(event){
	event.preventDefault();
	const title = document.getElementById('title').value.trim();
	const author - document.getElementById('author').value.trim();
	const ISBN = document.getElementById('isbn').value.trim();
	const tr = document.createElement('tr');
	const tdTitle = document.createElement('td');
	td.Title.textContext= title;
	const tdAuthor=document.createElement('td');
	tdAuthor.textContext= Author;
	const tdIsbn = document.createElement('td');
	td.ISBN.number = ISBN;
	tr.appendChild(tdTitle);
	tr.appendChild(tdAuthor);
	tr.appendChild(tdISBN);
	tbody.appendChild(tr);
	form.reset();
})
