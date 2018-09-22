// Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}

// UI Constructor

function UI() {
}

// Add Book to List
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');

//Create tr el
    const row = document.createElement('tr');

//insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
`;
    list.appendChild(row);
};


// Event Listeners
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        //get form values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        //instantiate book
        const book = new Book(title, author, isbn);

        //instantiate UI
        const UI = new UI();

        //add book to list
        ui.addBookToList(book);

        e.preventDefault();
    });