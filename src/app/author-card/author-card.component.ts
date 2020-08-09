import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spiget-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent implements OnInit {
  @Input()
  id: string;

  name: string;
  iconUrl: string;

  loading = true;
  error = false;

  constructor() { }

  ngOnInit(): void {
  }

  onError() {
    this.error = true;
  }

  onSuccess() {
  }

}
