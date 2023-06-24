import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.css']
})
export class BookDashboardComponent implements OnInit {

  bookDetail !: FormGroup;
  bookObj : Book = new Book();
  bookList : Book[] = [];

  constructor(private formBuilder : FormBuilder, private bookService : BookService) { }

  ngOnInit(): void {

    this.getAllBook();

    this.bookDetail = this.formBuilder.group({
      bookId : [''],
      name : [''],
      author: [''],
      price: ['']
    });    

  }

  onClickAddBook()
  {
    this.bookDetail.reset();
  }

  addBook() {
    console.log(this.bookDetail);
    this.bookObj.bookId = this.bookDetail.value.bookId;
    this.bookObj.name = this.bookDetail.value.name;
    this.bookObj.author = this.bookDetail.value.author;
    this.bookObj.price = this.bookDetail.value.price;

    this.bookService.addBook(this.bookObj).subscribe(res=>{
        console.log(res);
        this.getAllBook();
    },err=>{
        console.log(err);
    });

    this.bookDetail.reset();
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe(res=>{
        this.bookList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editBook(book : Book) {
    this.bookDetail.controls['bookId'].setValue(book.bookId);
    this.bookDetail.controls['name'].setValue(book.name);
    this.bookDetail.controls['author'].setValue(book.author);
    this.bookDetail.controls['price'].setValue(book.price);

  }

  updateBook() {

    this.bookObj.bookId = this.bookDetail.value.bookId;
    this.bookObj.name = this.bookDetail.value.name;
    this.bookObj.author = this.bookDetail.value.author;
    this.bookObj.price = this.bookDetail.value.price;

    this.bookService.updateBook(this.bookObj).subscribe(res=>{
      console.log(res);
      this.getAllBook();
    },err=>{
      console.log(err);
    })

  }

  deleteBook(book : Book) {

    this.bookService.deleteBook(book).subscribe(res=>{
      console.log(res);
      alert('Book deleted successfully');
      this.getAllBook();
    },err => {
      console.log(err);
    });

  }



}
