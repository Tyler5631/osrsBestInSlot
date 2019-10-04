import { Component, OnInit } from '@angular/core';
import { ItemActions } from './ItemActions';
import { ItemStore } from './ItemStore';
import { BasicItemModel } from './BasicItemModel';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ItemStore, ItemActions]
})
export class ItemListComponent implements OnInit {
  private itemActions: ItemActions;
  private itemStore: ItemStore
  constructor() { }

  items: BasicItemModel[] = this.itemStore.getItems();

  ngOnInit() {
    this.itemActions.setAllBasicItems();
  }
}
