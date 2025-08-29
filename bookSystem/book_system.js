let books = [];

function addBook() {
  const bookName = document.getElementById('bookName').value.trim();
  const authorName = document.getElementById('authorName').value.trim();
  const bookDescription = document.getElementById('bookDescription').value.trim();
  const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
      name: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      pagesNumber: pagesNumber
    };
    books.push(book);
    showBooks();
    clearInputs();
  } else {
    alert('Please fill in all fields correctly.');
  }
}

function showBooks() {
  const booksDiv = books.map((book, index) => `
    <div>
      <h3>Book Number: ${index + 1}</h3>
      <p><strong>Book Name:</strong> ${book.name}</p>
      <p><strong>Author Name:</strong> ${book.authorName}</p>
      <p><strong>Description:</strong> ${book.bookDescription}</p>
      <p><strong>Pages:</strong> ${book.pagesNumber}</p>
      <button onclick="editBook(${index})">Edit</button>
      <button onclick="deleteBook(${index})">Delete</button>
    </div>
  `);
  document.getElementById('books').innerHTML = booksDiv.join('');
}

function editBook(index) {
  const book = books[index];
  document.getElementById('bookName').value = book.name;
  document.getElementById('authorName').value = book.authorName;
  document.getElementById('bookDescription').value = book.bookDescription;
  document.getElementById('pagesNumber').value = book.pagesNumber;
  books.splice(index, 1);
  showBooks();
}

function deleteBook(index) {
  const confirmDelete = confirm("Are you sure you want to delete this book?");
  if (confirmDelete) {
    books.splice(index, 1);
    showBooks();
  }
}

function clearInputs() {
  document.getElementById('bookName').value = '';
  document.getElementById('authorName').value = '';
  document.getElementById('bookDescription').value = '';
  document.getElementById('pagesNumber').value = '';
}