import { Component, OnInit, Input } from '@angular/core';
import Resource from 'spiget/dist/types/Resource';
import ResourceVersion from 'spiget/dist/types/ResourceVersion';
import Author from 'spiget/dist/types/Author';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

const SPIGOTMC_ENDPOINT = "https://www.spigotmc.org/";
const ICON_NOT_FOUND = "https://static.spigotmc.org/styles/spigot/xenresource/resource_icon.png";
const AUTHOR_ICON_NOT_FOUND = "https://static.spigotmc.org/styles/spigot/xenforo/avatars/avatar_l.png";

@Component({
  selector: 'spiget-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {
  @Input()
  resource: Resource;

  @Input()
  version: ResourceVersion;

  @Input()
  author: Author;

  name: string;
  versionName: string;
  icon: SafeUrl;
  tag: string;
  authorName: string;
  authorIcon: SafeUrl;
  premium: boolean;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.name = this.filterName(this.resource.name);
    this.tag = this.resource.tag;
    this.versionName = this.version.name;
    this.premium = this.resource.premium;
    if (this.resource.icon.url === "") {
      this.icon = this.domSanitizer.bypassSecurityTrustUrl(ICON_NOT_FOUND);
    } else {
      this.icon = this.domSanitizer.bypassSecurityTrustUrl(SPIGOTMC_ENDPOINT + this.resource.icon.url);
    }

    this.authorName = this.author.name;
    if (this.author.icon.url === "") {
      this.authorIcon = this.domSanitizer.bypassSecurityTrustUrl(AUTHOR_ICON_NOT_FOUND);
    } else if (this.author.icon.url.startsWith("http")) { 
      this.authorIcon = this.domSanitizer.bypassSecurityTrustUrl(this.author.icon.url);
     } else {
      this.authorIcon = this.domSanitizer.bypassSecurityTrustUrl(SPIGOTMC_ENDPOINT + this.author.icon.url);
    }
  }

  filterName(name: string): string {
    return name.length >= 30 ? name.substring(0, 30) : name;
  }

}
