import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'spiget-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spiget-explorer';
  componentName = "";

  @ViewChild(RouterOutlet, { static: true })
  private router: RouterOutlet;

  onActivate() {
    this.router.activatedRoute.data.subscribe(data => this.componentName = data.name);
  }
}
