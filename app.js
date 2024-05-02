import {Book} from './class/BookClass.js';

const Books = [];

const bookForm = document.querySelector('form');
bookForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const bookname = document.querySelector('#bookname');
    const author = document.querySelector('#bookauthor');
    
    const book = new Book(bookname.value,author.value)
    Books.push(book);

    bookname.value="";
    author.value="";

    console.log(Books);
    createList(book)
});

function createList(book){
    const row = document.createElement('tr')
    const bookName = document.createElement('td');
    const author = document.createElement('td');
    const deleteBtn = document.createElement('button');

    bookName.textContent = book.title
    author.textContent = book.author;
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click',(e)=>{
        e.target.parentElement.remove();
        removeArray(Books,book)
    })

    row.appendChild(bookName)
    row.appendChild(author)
    row.appendChild(deleteBtn)
    document.querySelector('tbody').appendChild(row)
}

function removeArray(array,item){
    const indexToRemove = array.findIndex(element => element === item);
    if(indexToRemove !== -1){
        array.splice(indexToRemove, 1);
        console.log(array);
    }
}