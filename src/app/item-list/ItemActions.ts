import { ItemRepository } from '../itemService/ItemRepository';
import { ItemStore } from './ItemStore';
import { Stores } from '../utils/Stores';
import { Repositories } from '../utils/Repositories';
import { Injectable } from '@angular/core';

@Injectable() // learn more about this
export class ItemActions {
    private itemRepository: ItemRepository;
    private itemStore: ItemStore;

    constructor(stores: Partial<Stores>, repositories: Partial<Repositories>) {
        this.itemStore = stores.itemStore!;
        this.itemRepository = repositories.itemRepository!;
    }

    async setAllBasicItems() {
        this.itemStore.setItems(await this.itemRepository.getBasicItems());
    }
}