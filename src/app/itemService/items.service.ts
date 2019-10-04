import { Injectable } from '@angular/core';
import { CustomHTTPClient } from '../utils/CustomHttpClient';
import { BasicItemModel } from '../item-list/BasicItemModel';
import { BasicItemSerializer } from '../item-list/BasicItemSerializer';
import { ItemRepository } from './ItemRepository';


@Injectable({
  providedIn: 'root'
})
export class ItemsService implements ItemRepository {
private basicItemSerializer = new BasicItemSerializer();

baseURL = 'https://www.osrsbox.com/osrsbox-db/';
itemsCompleteURL = 'items-complete.json';
itemsNameAndNumberURL = 'items-summary.json';
specificItemURL = 'items-json'; // you need to append the item id to this url

getAllItems() {
  return this.http.get(this.baseURL + this.itemsCompleteURL);
}

async getBasicItems(): Promise<BasicItemModel[]> {
  const json = await this.http.getJSON(this.baseURL + this.itemsNameAndNumberURL);
  return json.map((obj: any) => {
    return this.basicItemSerializer.deserialize(obj);
  });
}

  constructor(private http: CustomHTTPClient) { }
}
