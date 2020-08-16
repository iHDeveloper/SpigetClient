import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceCardListComponent } from './resource-card-list.component';

describe('ResourceCardListComponent', () => {
  let component: ResourceCardListComponent;
  let fixture: ComponentFixture<ResourceCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
