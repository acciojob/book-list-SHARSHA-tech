const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
form.addEventListener('submit',function(event){
	event.preventDefault();
	const title = document.getElementById('title').value.trim();
	const author = document.getElementById('author').value.trim();
	const ISBN = document.getElementById('isbn').value.trim();
	const tr = document.createElement('tr');
	const tdTitle = document.createElement('td');
	tdTitle.textContext= title;
	const tdAuthor=document.createElement('td');
	tdAuthor.textContext= Author;
	const tdIsbn = document.createElement('td');
	tdIsbn.number = ISBN;
	tr.appendChild(tdTitle);
	tr.appendChild(tdAuthor);
	tr.appendChild(tdIsbn);
	const tdDelete = document.createElement('td');
	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Clear';
	deleteBtn.classList.add('delete');
	deleteBtn.addEventListener('click',function(){
		tbody.removeChild(tr);
	});
	tdDelete.appendChild(deleteBtn);
	tr.appendChild(tdDelete);
	tbody.appendChild(tr);
	form.reset();
})
