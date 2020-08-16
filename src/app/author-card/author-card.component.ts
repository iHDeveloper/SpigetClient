import { Component, OnInit, Input } from '@angular/core';
import Author from 'spiget/dist/types/Author';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { toTypeScript } from '@angular/compiler';

const SPIGOTMC_ENDPOINT = "https://www.spigotmc.org/";
const NOT_FOUND_ICON = "https://static.spigotmc.org/styles/spigot/xenforo/avatars/avatar_l.png";

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
      this.iconUrl = this.domSanitizer.bypassSecurityTrustUrl(NOT_FOUND_ICON);
      return;
    } else if (this.author.icon.url.startsWith("http")) {
      this.iconUrl = this.domSanitizer.bypassSecurityTrustUrl(this.author.icon.url);
      return;
    }
    this.iconUrl = this.domSanitizer.bypassSecurityTrustUrl(`${SPIGOTMC_ENDPOINT}${this.author.icon.url}`);
  }
}
