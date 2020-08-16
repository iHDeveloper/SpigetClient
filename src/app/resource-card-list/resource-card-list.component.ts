import { Component, OnInit, Input } from '@angular/core';
import { ResourceCard } from '../resource.card';
import { SpigetService } from '../spiget.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'spiget-resource-card-list',
  templateUrl: './resource-card-list.component.html',
  styleUrls: ['./resource-card-list.component.scss']
})
export class ResourceCardListComponent implements OnInit {
  @Input()
  type: 'latest' | 'updated';

  cards: ResourceCard[];

  loading = true;
  error = false;

  constructor(
    private service: SpigetService
  ) { }

  ngOnInit(): void {
    let request: Observable<ResourceCard[]>;
    if (this.type === 'latest') {
      request = this.service.latestResources();
    } else {
      request = this.service.updatedResources();
    }

    request.subscribe(
      cards => this.onSuccess(cards),
      () => this.onError(),
      () => this.loading = false,
    );
  }

  onError() {
    this.error = true;
  }

  onSuccess(cards: ResourceCard[]) {
    this.error = false;
    this.cards = cards;
  }

}
