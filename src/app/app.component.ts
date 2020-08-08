import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'spiget-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spiget-explorer';
  compId = "";
  compName = "";

  @ViewChild(RouterOutlet, { static: true })
  private outlet: RouterOutlet;

  constructor(
    private router: Router
  ) {}

  onActivate() {
    this.outlet.activatedRoute.data.subscribe(data => {
      this.compId = data.id;
      this.compName = data.name;
    });
  }

  go(name: string) {
    this.router.navigate([ name ]);
  }
}
