import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  addBookURL : string;
  getBookURL : string;
  updateBookUrl : string;
  deleteBookUrl : string;

  constructor(private http : HttpClient) {

    this.addBookURL = 'http://localhost:8080/book/addBook';
    this.getBookURL = 'http://localhost:8080/book/getAll';
    this.updateBookUrl = 'http://localhost:8080/book/updateBook';
    this.deleteBookUrl = 'http://localhost:8080/book/deleteBookById';

   }

   addBook(book : Book): Observable<Book> {
     return this.http.post<Book>(this.addBookURL,book);
   }

   getAllBook(): Observable<Book[]>{
     return this.http.get<Book[]>(this.getBookURL);
   }

   updateBook(book :Book) : Observable<Book>{
     return this.http.put<Book>(this.updateBookUrl, book);
   }

   deleteBook(book : Book) : Observable<Book> {
     return this.http.delete<Book>(this.deleteBookUrl+'/'+book.bookId);
   }

}
