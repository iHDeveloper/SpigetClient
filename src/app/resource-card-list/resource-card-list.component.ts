import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spiget-resource-card-list',
  templateUrl: './resource-card-list.component.html',
  styleUrls: ['./resource-card-list.component.scss']
})
export class ResourceCardListComponent implements OnInit {
  loading = true;
  error = false;

  constructor() { }

  ngOnInit(): void {
  }

}
