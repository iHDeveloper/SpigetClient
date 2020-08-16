import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCardListComponent } from './author-card-list.component';

describe('AuthorCardListComponent', () => {
  let component: AuthorCardListComponent;
  let fixture: ComponentFixture<AuthorCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
