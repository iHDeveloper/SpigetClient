import { Injectable } from '@angular/core';
import Spiget, { Pagination } from 'spiget/dist/Spiget';
import Author from 'spiget/dist/types/Author';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpigetService {
  private instance = new Spiget();

  constructor() { }

  latestAuthors(): Observable<Author[]> {
    return from(this.instance.getAuthorList(new Pagination(6, undefined, '-id')));
  }
}
