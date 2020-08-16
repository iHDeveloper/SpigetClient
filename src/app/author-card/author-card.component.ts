import { Component, OnInit, Input } from '@angular/core';
import Author from 'spiget/dist/types/Author';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

const SPIGOTMC_ENDPOINT = "https://www.spigotmc.org/";

@Component({
  selector: 'spiget-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent implements OnInit {
  @Input()
  author: Author;

  name: string;
  iconUrl: SafeUrl;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.name = this.author.name;
    if (this.author.icon.url === "") {
      return;
    }
    this.iconUrl = this.domSanitizer.bypassSecurityTrustUrl(`${SPIGOTMC_ENDPOINT}${this.author.icon.url}`);
  }
}
