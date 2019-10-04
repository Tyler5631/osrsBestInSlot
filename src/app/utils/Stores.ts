import { ItemStore } from "../item-list/ItemStore";

const itemStore = new ItemStore();

export interface Stores {
    itemStore: ItemStore;
}

export const stores = {
    itemStore
};