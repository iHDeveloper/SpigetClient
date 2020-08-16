import { Component, OnInit } from '@angular/core';
import { SpigetService } from '../spiget.service';
import Author from 'spiget/dist/types/Author';

@Component({
  selector: 'spiget-author-card-list',
  templateUrl: './author-card-list.component.html',
  styleUrls: ['./author-card-list.component.scss']
})
export class AuthorCardListComponent implements OnInit {
  authors: Author[];

  loading = true;
  error = false;

  constructor(
    private spigetService: SpigetService
  ) { }

  ngOnInit(): void {
    this.spigetService.latestAuthors().subscribe(
      authors => this.onSuccess(authors),
      () => this.onError(),
      () => this.loading = false
    );
  }

  onError() {
    this.error = true;
  }

  onSuccess(authors: Author[]) {
    this.error = false;
    this.authors = authors;
  }

}
