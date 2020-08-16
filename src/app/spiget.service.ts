import { Injectable } from '@angular/core';
import Spiget, { Pagination } from 'spiget/dist/Spiget';
import Author from 'spiget/dist/types/Author';
import Resource from 'spiget/dist/types/Resource';
import { Observable, from } from 'rxjs';
import { ResourceCard } from './resource.card';

@Injectable({
  providedIn: 'root'
})
export class SpigetService {
  private instance = new Spiget(undefined);

  constructor() { }

  latestAuthors(): Observable<Author[]> {
    return from(this.instance.getAuthorList(new Pagination(6, undefined, '-id')));
  }

  latestResources(): Observable<ResourceCard[]> {
    return from(this.fetchResources(this.instance.getNewResources(new Pagination(6))));
  }

  updatedResources(): Observable<ResourceCard[]> {
    return from(this.fetchResources(this.instance.getResourceList(new Pagination(6, undefined, '-updateDate'), [ 'id', 'name', 'tag', 'author', 'icon', 'version', 'premium' ])));
  }

  private async fetchResources(input: Promise<Resource[]>) {
    const result: ResourceCard[] = [];
    const resources = await input;
    
    for (const resource of resources) {
      const author = await resource.getAuthor();
      const version = await this.instance.getLatestResourceVersion(resource.id);

      result.push({
        resource: resource,
        version: version,
        author: author
      });
    }
    
    return result;
  }
}
