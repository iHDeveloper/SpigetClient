import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spiget-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {
  loading = false;
  error = false;

  constructor() { }

  ngOnInit(): void {
  }

}
